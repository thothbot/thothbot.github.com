interface Skill {
  name: string;
  yearStarted: number;
  usage: number;
  projects?: string[];
}

interface WordPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  skill: Skill;
  fontSize: number;
}

type CutoutCorner = 'tl' | 'tr' | 'bl' | 'br' | 'center';

export class SVGTagCloud {
  private container: HTMLElement;
  private svg: SVGSVGElement;
  private skills: Skill[];
  private cutoutCorner: CutoutCorner;
  private width: number = 0;
  private height: number = 0;
  private cutoutRadius: number = 0;
  private positions: WordPosition[] = [];
  private tooltip: HTMLElement | null = null;
  private color: string;
  private headerPadding: { top: number; bottom: number } = { top: 0, bottom: 0 };

  constructor(
    container: HTMLElement,
    skills: Skill[],
    cutoutCorner: CutoutCorner,
    cutoutRadius: number,
    color: string = '#ffffff'
  ) {
    this.container = container;
    this.skills = skills;
    this.cutoutCorner = cutoutCorner;
    this.cutoutRadius = cutoutRadius;
    this.color = color;

    // Set header padding based on cutout position
    // Top boxes (br, bl cutouts) have headers at top
    // Bottom boxes (tr, tl cutouts) have headers at bottom
    if (cutoutCorner === 'br' || cutoutCorner === 'bl') {
      this.headerPadding = { top: 52, bottom: 16 };
    } else if (cutoutCorner === 'tr' || cutoutCorner === 'tl') {
      this.headerPadding = { top: 16, bottom: 52 };
    } else {
      this.headerPadding = { top: 40, bottom: 16 }; // center circle with AI header
    }

    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.style.width = '100%';
    this.svg.style.height = '100%';
    this.svg.style.position = 'absolute';
    this.svg.style.inset = '0';
    this.svg.style.overflow = 'hidden';
    this.container.appendChild(this.svg);

    this.init();
    this.setupResize();
  }

  private init() {
    this.updateDimensions();
    this.layoutWords();
    this.render();
    this.setupTooltip();
  }

  private updateDimensions() {
    const rect = this.container.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
  }

  private setupResize() {
    const resizeObserver = new ResizeObserver(() => {
      this.updateDimensions();
      this.layoutWords();
      this.render();
    });
    resizeObserver.observe(this.container);
  }

  private getFontSize(usage: number): number {
    const minSize = Math.min(this.width, this.height) * 0.028;
    const maxSize = minSize * 4;
    const t = (usage - 1) / 4;
    return minSize + t * (maxSize - minSize);
  }

  private getCutoutCenter(): { x: number; y: number } {
    switch (this.cutoutCorner) {
      case 'tl':
        return { x: 0, y: 0 };
      case 'tr':
        return { x: this.width, y: 0 };
      case 'bl':
        return { x: 0, y: this.height };
      case 'br':
        return { x: this.width, y: this.height };
      case 'center':
        return { x: this.width / 2, y: this.height / 2 };
    }
  }

  private isInsideCutout(x: number, y: number, padding: number = 0): boolean {
    const center = this.getCutoutCenter();
    const radius = this.cutoutRadius + padding;
    const dx = x - center.x;
    const dy = y - center.y;
    return dx * dx + dy * dy < radius * radius;
  }

  private rectOverlapsCutout(
    x: number,
    y: number,
    w: number,
    h: number,
    padding: number = 10
  ): boolean {
    const corners = [
      { x, y },
      { x: x + w, y },
      { x, y: y + h },
      { x: x + w, y: y + h },
      { x: x + w / 2, y: y + h / 2 },
    ];
    return corners.some((c) => this.isInsideCutout(c.x, c.y, padding));
  }

  private measureText(text: string, fontSize: number): { width: number; height: number } {
    const tempText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tempText.setAttribute('font-size', `${fontSize}px`);
    tempText.setAttribute('font-family', '-apple-system, BlinkMacSystemFont, sans-serif');
    tempText.setAttribute('font-weight', '600');
    tempText.textContent = text;
    this.svg.appendChild(tempText);
    const bbox = tempText.getBBox();
    this.svg.removeChild(tempText);
    return { width: bbox.width, height: bbox.height };
  }

  private layoutWords() {
    this.positions = [];
    const padding = 20;
    const wordGap = 2;

    const sortedSkills = [...this.skills].sort((a, b) => b.usage - a.usage);
    const total = sortedSkills.length;

    sortedSkills.forEach((skill, index) => {
      const fontSize = this.getFontSize(skill.usage);
      const { width, height } = this.measureText(skill.name, fontSize);

      const position = this.findPosition(width, height, padding, wordGap, index, total);
      if (position) {
        this.positions.push({
          x: position.x,
          y: position.y,
          width,
          height,
          skill,
          fontSize,
        });
      }
    });
  }

  private findPosition(
    width: number,
    height: number,
    padding: number,
    wordGap: number,
    index: number = 0,
    total: number = 1
  ): { x: number; y: number } | null {
    if (this.cutoutCorner === 'center') {
      return this.findCircularPosition(width, height, index, total);
    }

    const minX = padding;
    const maxX = this.width - width - padding;
    const minY = this.headerPadding.top;
    const maxY = this.height - height - this.headerPadding.bottom;

    const availableWidth = maxX - minX;
    const availableHeight = maxY - minY;

    const spiralCenter = this.getSpiralCenter(availableWidth, availableHeight, minX, minY);
    const centerX = spiralCenter.x - width / 2;
    const centerY = spiralCenter.y - height / 2;

    let angle = 0;
    let radius = 0;
    const step = 4;
    const angleStep = 0.5;
    const maxRadius = Math.max(this.width, this.height);

    while (radius < maxRadius) {
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      if (x >= minX && x + width <= this.width - padding &&
          y >= minY && y + height <= this.height - this.headerPadding.bottom) {

        if (!this.rectOverlapsCutout(x, y, width, height, 5)) {
          const overlaps = this.positions.some((pos) => {
            return !(
              x + width + wordGap < pos.x ||
              x > pos.x + pos.width + wordGap ||
              y + height + wordGap < pos.y ||
              y > pos.y + pos.height + wordGap
            );
          });

          if (!overlaps) {
            return { x, y };
          }
        }
      }

      angle += angleStep;
      radius += step * angleStep / (2 * Math.PI);
    }

    return this.findFallbackPosition(width, height, padding, wordGap);
  }

  private getSpiralCenter(
    availableWidth: number,
    availableHeight: number,
    minX: number,
    minY: number
  ): { x: number; y: number } {
    const cutoutOffset = this.cutoutRadius * 0.4;

    switch (this.cutoutCorner) {
      case 'br':
        return {
          x: minX + (availableWidth - cutoutOffset) / 2,
          y: minY + (availableHeight - cutoutOffset) / 2,
        };
      case 'bl':
        return {
          x: minX + (availableWidth + cutoutOffset) / 2,
          y: minY + (availableHeight - cutoutOffset) / 2,
        };
      case 'tr':
        return {
          x: minX + (availableWidth - cutoutOffset) / 2,
          y: minY + (availableHeight + cutoutOffset) / 2,
        };
      case 'tl':
        return {
          x: minX + (availableWidth + cutoutOffset) / 2,
          y: minY + (availableHeight + cutoutOffset) / 2,
        };
      default:
        return {
          x: minX + availableWidth / 2,
          y: minY + availableHeight / 2,
        };
    }
  }

  private findCircularPosition(
    width: number,
    height: number,
    index: number,
    total: number
  ): { x: number; y: number } | null {
    const padding = 40;
    const wordGap = 2;
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const headerOffset = 8;
    const adjustedCenterY = centerY + headerOffset;
    const circleRadius = Math.min(this.width, this.height) / 2 - padding;

    let angle = 0;
    let radius = 0;
    const step = 3;
    const angleStep = 0.4;
    const maxRadius = circleRadius;

    while (radius < maxRadius) {
      const x = centerX + Math.cos(angle) * radius - width / 2;
      const y = adjustedCenterY + Math.sin(angle) * radius - height / 2;

      if (this.isRectInsideCircle(x, y, width, height, centerX, adjustedCenterY, circleRadius)) {
        const overlaps = this.positions.some((pos) => {
          return !(
            x + width + wordGap < pos.x ||
            x > pos.x + pos.width + wordGap ||
            y + height + wordGap < pos.y ||
            y > pos.y + pos.height + wordGap
          );
        });

        if (!overlaps) {
          return { x, y };
        }
      }

      angle += angleStep;
      radius += step * angleStep / (2 * Math.PI);
    }

    return null;
  }

  private isRectInsideCircle(
    x: number,
    y: number,
    w: number,
    h: number,
    cx: number,
    cy: number,
    r: number
  ): boolean {
    const corners = [
      { x, y },
      { x: x + w, y },
      { x, y: y + h },
      { x: x + w, y: y + h },
    ];
    return corners.every((c) => {
      const dx = c.x - cx;
      const dy = c.y - cy;
      return dx * dx + dy * dy <= r * r;
    });
  }

  private findFallbackPosition(
    width: number,
    height: number,
    padding: number,
    wordGap: number
  ): { x: number; y: number } | null {
    const step = 4;
    const minY = this.headerPadding.top;
    const maxY = this.height - height - this.headerPadding.bottom;

    for (let y = minY; y < maxY; y += step) {
      for (let x = padding; x < this.width - width - padding; x += step) {
        if (this.rectOverlapsCutout(x, y, width, height, 5)) continue;

        const overlaps = this.positions.some((pos) => {
          return !(
            x + width + wordGap < pos.x ||
            x > pos.x + pos.width + wordGap ||
            y + height + wordGap < pos.y ||
            y > pos.y + pos.height + wordGap
          );
        });

        if (!overlaps) {
          return { x, y };
        }
      }
    }

    return null;
  }

  private render() {
    while (this.svg.firstChild) {
      this.svg.removeChild(this.svg.firstChild);
    }

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = `
      .tag-text {
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.2s;
        transform-origin: center;
        transform-box: fill-box;
      }
      .tag-text:hover {
        opacity: 1 !important;
      }
    `;
    defs.appendChild(style);
    this.svg.appendChild(defs);

    this.positions.forEach((pos, i) => {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('class', 'tag-group');
      group.style.opacity = '0';
      group.style.animation = `tagFadeIn 0.5s ease-out ${0.3 + i * 0.05}s forwards`;

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', `${pos.x}`);
      text.setAttribute('y', `${pos.y + pos.height * 0.8}`);
      text.setAttribute('font-size', `${pos.fontSize}px`);
      text.setAttribute('class', 'tag-text');

      const opacityVariants = [0.9, 0.7, 0.5, 0.6];
      const opacity = opacityVariants[i % opacityVariants.length];
      text.setAttribute('fill', `rgba(255, 255, 255, ${opacity})`);

      text.textContent = pos.skill.name;

      text.dataset.year = String(pos.skill.yearStarted);
      text.dataset.usage = String(pos.skill.usage);
      text.dataset.projects = pos.skill.projects?.join(', ') || '';

      group.appendChild(text);
      this.svg.appendChild(group);
    });

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes tagFadeIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    if (!document.querySelector('#svg-tag-cloud-styles')) {
      styleSheet.id = 'svg-tag-cloud-styles';
      document.head.appendChild(styleSheet);
    }
  }

  private setupTooltip() {
    this.tooltip = document.getElementById('skill-tooltip');
    if (!this.tooltip) return;

    const tooltipContent = this.tooltip.querySelector('.tooltip-content');
    const usageLabels = ['', 'Rarely', 'Occasional', 'Regular', 'Frequent', 'Daily'];

    this.svg.querySelectorAll('.tag-text').forEach((text) => {
      text.addEventListener('mouseenter', (e) => {
        const target = e.target as SVGTextElement;
        const year = target.dataset.year;
        const usage = target.dataset.usage;
        const projects = target.dataset.projects;
        const name = target.textContent;
        const years = year ? 2025 - parseInt(year) : 0;
        const usageLabel = usage ? usageLabels[parseInt(usage)] : '';

        if (tooltipContent && this.tooltip) {
          tooltipContent.innerHTML = `
            <div class="font-semibold text-white mb-1">${name}</div>
            <div class="text-white/60 text-xs">${years} years experience</div>
            ${usageLabel ? `<div class="text-white/60 text-xs">Usage: ${usageLabel}</div>` : ''}
            ${projects ? `<div class="text-white/40 text-xs mt-1">Projects: ${projects}</div>` : ''}
          `;
          this.tooltip.classList.add('visible');
        }

        target.setAttribute('fill', 'rgba(255, 255, 255, 1)');
      });

      text.addEventListener('mousemove', (e) => {
        if (this.tooltip) {
          const mouseEvent = e as MouseEvent;
          this.tooltip.style.left = `${mouseEvent.clientX + 15}px`;
          this.tooltip.style.top = `${mouseEvent.clientY + 15}px`;
        }
      });

      text.addEventListener('mouseleave', (e) => {
        if (this.tooltip) {
          this.tooltip.classList.remove('visible');
        }
        const target = e.target as SVGTextElement;
        const index = Array.from(this.svg.querySelectorAll('.tag-text')).indexOf(target);
        const opacityVariants = [0.9, 0.7, 0.5, 0.6];
        const opacity = opacityVariants[index % opacityVariants.length];
        target.setAttribute('fill', `rgba(255, 255, 255, ${opacity})`);
      });
    });
  }

  public destroy() {
    this.svg.remove();
  }
}
