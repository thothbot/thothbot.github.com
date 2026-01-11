import { gsap } from 'gsap';

interface Skill {
  name: string;
  layer: 'ai' | 'application' | 'services' | 'data' | 'infrastructure';
  yearStarted: number;
  projects?: string[];
}

interface SkillNode extends Skill {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  scale: number;
  circleIndex: number;
}

interface LayerCircle {
  id: string;
  label: string;
  x: number;
  y: number;
  radius: number;
  color: string;
}

interface Connection {
  from: SkillNode;
  to: SkillNode;
}

const LAYER_COLORS = {
  ai: '#8b5cf6',
  application: '#06b6d4',
  services: '#3b82f6',
  data: '#10b981',
  infrastructure: '#f97316',
};

const skills: Skill[] = [
  // AI Layer (center)
  { name: 'LangGraph', layer: 'ai', yearStarted: 2023, projects: ['GeneEase'] },
  { name: 'RAG', layer: 'ai', yearStarted: 2023, projects: ['GeneEase'] },
  { name: 'Vector Search', layer: 'ai', yearStarted: 2023, projects: ['GeneEase'] },
  { name: 'Prompt Eng', layer: 'ai', yearStarted: 2022, projects: ['AI Tools'] },
  { name: 'LLM Pipelines', layer: 'ai', yearStarted: 2023, projects: ['GeneEase'] },

  // Application Layer (top-left)
  { name: 'React', layer: 'application', yearStarted: 2016, projects: ['Orbes'] },
  { name: 'TypeScript', layer: 'application', yearStarted: 2018, projects: ['All'] },
  { name: 'Three.js', layer: 'application', yearStarted: 2012, projects: ['Parallax'] },
  { name: 'WebGL', layer: 'application', yearStarted: 2012, projects: ['Parallax'] },
  { name: 'GSAP', layer: 'application', yearStarted: 2016, projects: ['Animations'] },
  { name: 'Astro', layer: 'application', yearStarted: 2023, projects: ['Portfolio'] },

  // Services Layer (top-right)
  { name: 'Python', layer: 'services', yearStarted: 2010, projects: ['AI', 'APIs'] },
  { name: 'FastAPI', layer: 'services', yearStarted: 2020, projects: ['GeneEase'] },
  { name: 'Java', layer: 'services', yearStarted: 2007, projects: ['Enterprise'] },
  { name: 'Spring', layer: 'services', yearStarted: 2009, projects: ['Microservices'] },
  { name: 'Node.js', layer: 'services', yearStarted: 2014, projects: ['Desygner'] },
  { name: 'Akka', layer: 'services', yearStarted: 2016, projects: ['Trading'] },

  // Data Layer (bottom-left)
  { name: 'PostgreSQL', layer: 'data', yearStarted: 2009, projects: ['All'] },
  { name: 'pgvector', layer: 'data', yearStarted: 2023, projects: ['GeneEase'] },
  { name: 'Redis', layer: 'data', yearStarted: 2014, projects: ['Caching'] },
  { name: 'Neo4j', layer: 'data', yearStarted: 2021, projects: ['Graph'] },
  { name: 'Elasticsearch', layer: 'data', yearStarted: 2015, projects: ['Search'] },
  { name: 'MongoDB', layer: 'data', yearStarted: 2014, projects: ['Apps'] },

  // Infrastructure Layer (bottom-right)
  { name: 'AWS', layer: 'infrastructure', yearStarted: 2012, projects: ['Cloud'] },
  { name: 'Kubernetes', layer: 'infrastructure', yearStarted: 2019, projects: ['Ops'] },
  { name: 'Docker', layer: 'infrastructure', yearStarted: 2016, projects: ['Containers'] },
  { name: 'Terraform', layer: 'infrastructure', yearStarted: 2020, projects: ['IaC'] },
  { name: 'Linux', layer: 'infrastructure', yearStarted: 2007, projects: ['All'] },
  { name: 'GitLab CI', layer: 'infrastructure', yearStarted: 2018, projects: ['CI/CD'] },
];

const meshConnections: Record<string, [string, string][]> = {
  application: [
    ['React', 'TypeScript'], ['TypeScript', 'Astro'], ['Three.js', 'WebGL'],
    ['WebGL', 'GSAP'], ['React', 'GSAP'], ['Three.js', 'GSAP'],
  ],
  services: [
    ['Python', 'FastAPI'], ['Java', 'Spring'], ['Java', 'Akka'],
    ['Node.js', 'TypeScript'], ['Python', 'Java'], ['FastAPI', 'Python'],
  ],
  data: [
    ['PostgreSQL', 'pgvector'], ['PostgreSQL', 'Redis'], ['Elasticsearch', 'PostgreSQL'],
    ['Redis', 'MongoDB'], ['Neo4j', 'PostgreSQL'], ['MongoDB', 'Redis'],
  ],
  infrastructure: [
    ['AWS', 'Kubernetes'], ['Kubernetes', 'Docker'], ['Docker', 'Linux'],
    ['Terraform', 'AWS'], ['GitLab CI', 'Docker'], ['AWS', 'Linux'],
  ],
  ai: [
    ['LangGraph', 'RAG'], ['RAG', 'Vector Search'], ['LangGraph', 'Prompt Eng'],
    ['Prompt Eng', 'LLM Pipelines'], ['RAG', 'LLM Pipelines'], ['Vector Search', 'RAG'],
  ],
};

const crossLayerConnections: [string, string][] = [
  // AI connects to all
  ['LangGraph', 'Python'], ['RAG', 'pgvector'], ['Vector Search', 'Elasticsearch'],
  ['LLM Pipelines', 'FastAPI'], ['Prompt Eng', 'React'],
  // Application <-> Services
  ['React', 'Node.js'], ['TypeScript', 'FastAPI'],
  // Services <-> Data
  ['Python', 'PostgreSQL'], ['FastAPI', 'Redis'], ['Java', 'PostgreSQL'],
  // Services <-> Infrastructure
  ['Python', 'Docker'], ['FastAPI', 'AWS'],
  // Data <-> Infrastructure
  ['PostgreSQL', 'AWS'], ['Redis', 'Kubernetes'],
  // Application <-> Infrastructure
  ['React', 'Docker'],
];

export class SkillMap {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private nodes: SkillNode[] = [];
  private circles: LayerCircle[] = [];
  private connections: Connection[] = [];
  private crossConnections: Connection[] = [];
  private width = 0;
  private height = 0;
  private hoveredNode: SkillNode | null = null;
  private hoveredCircle: LayerCircle | null = null;
  private animationId: number = 0;
  private dpr = 1;
  private tooltip: HTMLElement | null = null;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!this.canvas) throw new Error(`Canvas ${canvasId} not found`);

    this.ctx = this.canvas.getContext('2d')!;
    this.dpr = window.devicePixelRatio || 1;

    this.setupCanvas();
    this.createCircles();
    this.createNodes();
    this.createConnections();
    this.setupInteractions();
    this.createTooltip();
    this.animate();

    window.addEventListener('resize', () => {
      this.setupCanvas();
      this.createCircles();
      this.updateNodePositions();
    });
  }

  private setupCanvas() {
    const rect = this.canvas.parentElement?.getBoundingClientRect();
    this.width = rect?.width || window.innerWidth;
    this.height = rect?.height || window.innerHeight;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.scale(this.dpr, this.dpr);
  }

  private createCircles() {
    const circleRadius = Math.min(this.width, this.height) * 0.28;
    const centerGap = circleRadius * 0.3;

    const centerX = this.width / 2;
    const centerY = this.height / 2;

    this.circles = [
      {
        id: 'application',
        label: 'Application',
        x: centerX - circleRadius + centerGap,
        y: centerY - circleRadius + centerGap,
        radius: circleRadius,
        color: LAYER_COLORS.application,
      },
      {
        id: 'services',
        label: 'Services',
        x: centerX + circleRadius - centerGap,
        y: centerY - circleRadius + centerGap,
        radius: circleRadius,
        color: LAYER_COLORS.services,
      },
      {
        id: 'data',
        label: 'Data',
        x: centerX - circleRadius + centerGap,
        y: centerY + circleRadius - centerGap,
        radius: circleRadius,
        color: LAYER_COLORS.data,
      },
      {
        id: 'infrastructure',
        label: 'Infrastructure',
        x: centerX + circleRadius - centerGap,
        y: centerY + circleRadius - centerGap,
        radius: circleRadius,
        color: LAYER_COLORS.infrastructure,
      },
      {
        id: 'ai',
        label: 'AI',
        x: centerX,
        y: centerY,
        radius: circleRadius * 0.45,
        color: LAYER_COLORS.ai,
      },
    ];
  }

  private createNodes() {
    const layerSkills: Record<string, Skill[]> = {};
    skills.forEach(skill => {
      if (!layerSkills[skill.layer]) layerSkills[skill.layer] = [];
      layerSkills[skill.layer].push(skill);
    });

    this.nodes = [];

    this.circles.forEach((circle, circleIndex) => {
      const layerNodes = layerSkills[circle.id] || [];
      layerNodes.sort((a, b) => a.yearStarted - b.yearStarted);

      layerNodes.forEach((skill) => {
        this.nodes.push({
          ...skill,
          x: 0,
          y: 0,
          radius: circle.id === 'ai' ? 8 : 6,
          color: circle.color,
          alpha: 0,
          scale: 0,
          circleIndex,
        });
      });
    });

    this.updateNodePositions();
  }

  private updateNodePositions() {
    const layerNodes: Record<string, SkillNode[]> = {};
    this.nodes.forEach(node => {
      if (!layerNodes[node.layer]) layerNodes[node.layer] = [];
      layerNodes[node.layer].push(node);
    });

    this.circles.forEach(circle => {
      const nodes = layerNodes[circle.id] || [];
      const count = nodes.length;

      if (circle.id === 'ai') {
        const angleStep = (Math.PI * 2) / count;
        const innerRadius = circle.radius * 0.5;
        nodes.forEach((node, i) => {
          const angle = angleStep * i - Math.PI / 2;
          node.x = circle.x + Math.cos(angle) * innerRadius;
          node.y = circle.y + Math.sin(angle) * innerRadius;
        });
      } else {
        nodes.sort((a, b) => b.yearStarted - a.yearStarted);
        const spiralTurns = 1.2;
        const maxRadius = circle.radius * 0.7;
        const minRadius = circle.radius * 0.15;

        nodes.forEach((node, i) => {
          const t = count > 1 ? i / (count - 1) : 0;
          const angle = t * Math.PI * 2 * spiralTurns - Math.PI / 2;
          const radius = minRadius + (maxRadius - minRadius) * t;
          node.x = circle.x + Math.cos(angle) * radius;
          node.y = circle.y + Math.sin(angle) * radius;
        });
      }
    });
  }

  private findNode(name: string): SkillNode | undefined {
    for (const node of this.nodes) {
      if (node.name === name) return node;
    }
    return undefined;
  }

  private createConnections() {
    this.connections = [];
    this.crossConnections = [];

    Object.entries(meshConnections).forEach(([, pairs]) => {
      pairs.forEach(([fromName, toName]) => {
        const from = this.findNode(fromName);
        const to = this.findNode(toName);
        if (from && to) {
          this.connections.push({ from, to });
        }
      });
    });

    crossLayerConnections.forEach(([fromName, toName]) => {
      const from = this.findNode(fromName);
      const to = this.findNode(toName);
      if (from && to) {
        this.crossConnections.push({ from, to });
      }
    });
  }

  private createTooltip() {
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'skill-tooltip';
    this.tooltip.style.cssText = `
      position: fixed;
      padding: 10px 14px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      color: white;
      font-size: 13px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 100;
      backdrop-filter: blur(10px);
      max-width: 220px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(this.tooltip);
  }

  private setupInteractions() {
    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;
      return { x: (clientX || 0) - rect.left, y: (clientY || 0) - rect.top };
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const pos = getPos(e);
      let foundNode: SkillNode | null = null;
      let foundCircle: LayerCircle | null = null;

      for (const node of this.nodes) {
        const dx = pos.x - node.x;
        const dy = pos.y - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius * 2.5) {
          foundNode = node;
          break;
        }
      }

      if (!foundNode) {
        for (const circle of this.circles) {
          const dx = pos.x - circle.x;
          const dy = pos.y - circle.y;
          if (Math.sqrt(dx * dx + dy * dy) < circle.radius) {
            foundCircle = circle;
            break;
          }
        }
      }

      this.hoveredNode = foundNode;
      this.hoveredCircle = foundCircle;
      this.canvas.style.cursor = foundNode ? 'pointer' : 'default';

      if (foundNode && this.tooltip) {
        const years = 2025 - foundNode.yearStarted;
        this.tooltip.innerHTML = `
          <div style="font-weight: 600; color: ${foundNode.color}; margin-bottom: 6px; font-size: 14px;">${foundNode.name}</div>
          <div style="color: rgba(255,255,255,0.8); font-size: 12px; margin-bottom: 4px;">${years} years experience</div>
          <div style="color: rgba(255,255,255,0.5); font-size: 11px;">Since ${foundNode.yearStarted}</div>
          ${foundNode.projects ? `<div style="color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 6px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 6px;">Projects: ${foundNode.projects.join(', ')}</div>` : ''}
        `;
        this.tooltip.style.opacity = '1';

        const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;
        this.tooltip.style.left = `${(clientX || 0) + 15}px`;
        this.tooltip.style.top = `${(clientY || 0) + 15}px`;
      } else if (this.tooltip) {
        this.tooltip.style.opacity = '0';
      }
    };

    this.canvas.addEventListener('mousemove', handleMove);
    this.canvas.addEventListener('touchmove', handleMove, { passive: true });
    this.canvas.addEventListener('mouseleave', () => {
      this.hoveredNode = null;
      this.hoveredCircle = null;
      if (this.tooltip) this.tooltip.style.opacity = '0';
    });
  }

  public animateIn() {
    this.circles.forEach((circle, i) => {
      const layerNodes = this.nodes.filter(n => n.layer === circle.id);
      layerNodes.forEach((node, j) => {
        gsap.to(node, {
          alpha: 1,
          scale: 1,
          duration: 0.5,
          delay: i * 0.15 + j * 0.05,
          ease: 'back.out(1.5)',
        });
      });
    });
  }

  private draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Draw layer circles
    this.circles.forEach(circle => {
      const isHovered = this.hoveredCircle === circle ||
        (this.hoveredNode && this.hoveredNode.layer === circle.id);

      // Circle fill
      const gradient = ctx.createRadialGradient(
        circle.x, circle.y, 0,
        circle.x, circle.y, circle.radius
      );
      gradient.addColorStop(0, circle.color + (isHovered ? '15' : '08'));
      gradient.addColorStop(0.7, circle.color + (isHovered ? '08' : '04'));
      gradient.addColorStop(1, circle.color + '00');

      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Circle border
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.strokeStyle = circle.color + (isHovered ? '40' : '20');
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      // Label
      ctx.font = `${circle.id === 'ai' ? 'bold 14px' : '12px'} system-ui, sans-serif`;
      ctx.fillStyle = circle.color + (isHovered ? 'cc' : '80');
      ctx.textAlign = 'center';

      if (circle.id === 'ai') {
        ctx.fillText(circle.label, circle.x, circle.y - circle.radius - 12);
      } else {
        const labelOffsets: Record<string, { x: number; y: number }> = {
          application: { x: -circle.radius * 0.5, y: -circle.radius - 10 },
          services: { x: circle.radius * 0.5, y: -circle.radius - 10 },
          data: { x: -circle.radius * 0.5, y: circle.radius + 20 },
          infrastructure: { x: circle.radius * 0.5, y: circle.radius + 20 },
        };
        const offset = labelOffsets[circle.id] || { x: 0, y: 0 };
        ctx.fillText(circle.label, circle.x + offset.x, circle.y + offset.y);
      }
    });

    // Draw intra-layer connections (mesh inside circles)
    this.connections.forEach(conn => {
      if (conn.from.alpha < 0.1 || conn.to.alpha < 0.1) return;

      const isHighlighted = this.hoveredNode &&
        (conn.from === this.hoveredNode || conn.to === this.hoveredNode);
      const isLayerHovered = this.hoveredCircle &&
        conn.from.layer === this.hoveredCircle.id;

      ctx.beginPath();
      ctx.moveTo(conn.from.x, conn.from.y);
      ctx.lineTo(conn.to.x, conn.to.y);

      const alpha = Math.min(conn.from.alpha, conn.to.alpha);
      if (isHighlighted) {
        ctx.strokeStyle = this.hoveredNode!.color + '90';
        ctx.lineWidth = 2;
      } else if (isLayerHovered) {
        ctx.strokeStyle = conn.from.color + '40';
        ctx.lineWidth = 1.5;
      } else {
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * alpha})`;
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    });

    // Draw cross-layer connections
    this.crossConnections.forEach(conn => {
      if (conn.from.alpha < 0.1 || conn.to.alpha < 0.1) return;

      const isHighlighted = this.hoveredNode &&
        (conn.from === this.hoveredNode || conn.to === this.hoveredNode);

      if (!isHighlighted && !this.hoveredNode) return;

      ctx.beginPath();
      ctx.moveTo(conn.from.x, conn.from.y);

      // Curved line for cross-layer
      const midX = (conn.from.x + conn.to.x) / 2;
      const midY = (conn.from.y + conn.to.y) / 2;
      const centerX = this.width / 2;
      const centerY = this.height / 2;
      const ctrlX = midX + (centerX - midX) * 0.3;
      const ctrlY = midY + (centerY - midY) * 0.3;

      ctx.quadraticCurveTo(ctrlX, ctrlY, conn.to.x, conn.to.y);

      if (isHighlighted) {
        ctx.strokeStyle = this.hoveredNode!.color + '60';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // Draw nodes
    this.nodes.forEach(node => {
      if (node.alpha < 0.01) return;

      const isHovered = node === this.hoveredNode;
      const isConnected = this.hoveredNode && (
        this.connections.some(c =>
          (c.from === this.hoveredNode && c.to === node) ||
          (c.to === this.hoveredNode && c.from === node)
        ) ||
        this.crossConnections.some(c =>
          (c.from === this.hoveredNode && c.to === node) ||
          (c.to === this.hoveredNode && c.from === node)
        )
      );
      const isLayerHovered = this.hoveredCircle && node.layer === this.hoveredCircle.id;
      const dimmed = (this.hoveredNode || this.hoveredCircle) && !isHovered && !isConnected && !isLayerHovered;

      const baseRadius = node.radius * node.scale;
      const radius = isHovered ? baseRadius * 1.6 : baseRadius;
      const alpha = dimmed ? node.alpha * 0.25 : node.alpha;

      // Glow
      if (isHovered || isConnected) {
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, radius * 4
        );
        glow.addColorStop(0, node.color + '50');
        glow.addColorStop(1, node.color + '00');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Node
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      const hex = Math.round(alpha * 255).toString(16);
      ctx.fillStyle = node.color + (hex.length < 2 ? '0' + hex : hex);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, ' + (alpha * 0.4) + ')';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Label
      if (node.scale > 0.5 && (isHovered || isConnected || isLayerHovered || (!this.hoveredNode && !this.hoveredCircle))) {
        ctx.font = `${isHovered ? '12px' : '10px'} system-ui, sans-serif`;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * (isHovered ? 1 : 0.7)})`;
        ctx.textAlign = 'center';
        ctx.fillText(node.name, node.x, node.y + radius + 12);
      }
    });
  }

  private animate() {
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  public destroy() {
    cancelAnimationFrame(this.animationId);
    if (this.tooltip) this.tooltip.remove();
  }
}

export function initSkillMap() {
  const canvas = document.getElementById('skill-map-canvas');
  if (!canvas) return null;

  const map = new SkillMap('skill-map-canvas');
  setTimeout(() => map.animateIn(), 300);

  return map;
}
