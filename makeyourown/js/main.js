var ConvexTextRing, WorldUVGenerator, debug, qtE, qyt, __hasProp = {}.hasOwnProperty, __extends = function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) __hasProp.call(b, d) && (a[d] = b[d]);
    return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
    a;
};

ConvexTextRing = function() {
    var a, b, c, d, e;
    return _global.rotate = !0, addRotateModelHandlers(), e = [ 0, Math.PI ], controls.minPolarAngle = e[0], 
    controls.maxPolarAngle = e[1], controls.maxDistance = 38, camera.position.z = 100, 
    camera.position.y = 80, $("#ajax-loading").show(), a = new THREE.Object3D(), a.userData.model = !0, 
    b = function() {
        return function(b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
            return null == c && (c = !0), o = {
                text: null == modelParams.str ? "MYOMYO" : modelParams.str,
                font: config.p2.defaultFont,
                sideSmooth: .5,
                bottomSmooth: config.p2.sideSmooth,
                thickness: 2,
                ringSize: 18,
                height: 2.5,
                materialName: "Silver",
                fontHeight: 4,
                distance: 4
            }, v = 10, j = 0, i = o.fontHeight, l = 0, h = function(a, b) {
                var c, d;
                for (c in b) d = b[c], a[c] = d;
                return a;
            }, o = h(o, b), o.frontContourBevelThickness = o.sideSmooth * (o.height - .2), o.frontContourBevelSize = o.bottomSmooth * (o.thickness - .2), 
            o.backContourBevelThickness = 0, o.backContourBevelSize = 0, t = .1, n = Math.max(o.frontContourBevelThickness, .1), 
            q = .1, e = Math.max(.1, o.height - n - q), p = o.ringSize / 2 + t, m = o.ringSize / 2 + o.thickness - o.frontContourBevelSize, 
            p > m && (m = p + 1), o.amount = e, u = new THREE.Shape(), u.moveTo(m, 0), u.absarc(0, 0, m, 0, 2 * Math.PI, !1), 
            g = new THREE.Path(), g.moveTo(p, 0), g.absarc(0, 0, p, 0, 2 * Math.PI, !0), u.holes.push(g), 
            d = new qyt(u, o), w = new THREE.Mesh(d, silverMaterial.clone()), w.userData.meshDown = !0, 
            w.rotation.x = Math.PI / 2, w.position.y = -o.fontHeight / 2, a.add(w), c && 1 !== o.bottomSmooth && (k = new THREE.RingGeometry(p - 0, m + .1, 32, 32, 0, 2 * Math.PI), 
            r = new THREE.Mesh(k, silverMaterial.clone()), r.userData.ringUp = !0, r.rotation.x = -Math.PI / 2, 
            r.position.y = o.fontHeight / 2 + o.height - .07, s = r.clone(), s.userData.ringDown = !0, 
            s.rotation.x = Math.PI / 2, s.position.y = -o.fontHeight / 2 - o.height + .07, a.add(r), 
            a.add(s)), f = new THREE.Mesh(d, silverMaterial.clone()), f.userData.meshUp = !0, 
            f.rotation.x = -Math.PI / 2, f.position.y = o.fontHeight / 2, a.add(f), changeMaterialNew(a, modelParams.material);
        };
    }(this), c = function(b) {
        return function(c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
            return n = {
                text: "MYOMYO",
                font: config.p2.defaultFont,
                sideSmooth: .5,
                bottomSmooth: config.p2.sideSmooth,
                thickness: 3,
                ringSize: 18,
                height: 2.5,
                materialName: "Silver",
                fontHeight: 4,
                distance: 1e3
            }, console.log(n), v = 0, g = 0, f = n.fontHeight, k = 0, e = function(a, b) {
                var c, d;
                for (c in b) d = b[c], a[c] = d;
                return a;
            }, n = e(n, c), n.frontContourBevelThickness = n.sideSmooth * (n.height - .2), n.frontContourBevelSize = n.bottomSmooth * (n.thickness - .2), 
            n.backContourBevelThickness = 0, n.backContourBevelSize = 0, t = .1, m = Math.max(n.frontContourBevelThickness, .1), 
            s = .1, d = Math.max(.1, n.height - m - s), o = n.ringSize / 2 + t, l = n.ringSize / 2 + n.thickness - n.frontContourBevelSize, 
            o > l && (l = o + 1), n.amount = d, j = (o + o + n.thickness - .2 - .09 * n.fontHeight) / 2, 
            n = {
                font: c.font,
                text: c.text,
                fontHeight: n.fontHeight,
                size: 2,
                fontThickness: n.fontThickness
            }, u = new THREE.Shape(), u.moveTo(j, 0), u.absarc(0, 0, j, 2 * Math.PI, 0, !0), 
            p = u.getSpacedPoints(100), r = function(a) {
                return new THREE.Vector3(a.x, 0, a.y);
            }, q = function(a, b) {
                var c, d, e;
                e = [];
                for (c in a) d = r(a[c], b), e.push(d);
                return e;
            }, i = new THREE.SplineCurve3(q(p)), n.qup = i, h = new qtE(b.qab, n), h.create(), 
            h.text.position.y = 0, h.text.position.x = 0, h.text.position.z = 0, h.text.userData.text = !0, 
            a.add(h.text), changeMaterialNew(a, modelParams.material);
        };
    }(this), modelParams.height = config.p2.ringHeight, modelParams.heightv = modelParams.height, 
    modelParams.thickness = config.p2.ringThickness, modelParams.fontThickness = modelParams.thickness, 
    modelParams.bottomSmooth = config.p2.sideSmooth, modelParams.font = config.p2.defaultFont, 
    modelParams.fontHeight = config.p2.fontHeight, modelParams.changeHeight = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
        for (p = scene.children, f = 0, j = p.length; j > f; f++) if (d = p[f], null != d && d.userData.model === !0) {
            for (b = null, q = d.children, g = 0, k = q.length; k > g; g++) c = q[g], null != c && c.userData.meshDown === !0 && (c.scale.z = .4 * a, 
            b = c);
            for (r = d.children, h = 0, l = r.length; l > h; h++) e = r[h], null != e && e.userData.ringDown === !0 && (e.position.y = -modelParams.fontHeight / 2 - modelParams.height * a * .39);
            for (b = null, s = d.children, i = 0, m = s.length; m > i; i++) c = s[i], null != c && c.userData.meshUp === !0 && (c.scale.z = .4 * a, 
            b = c);
            for (t = d.children, o = 0, n = t.length; n > o; o++) e = t[o], null != e && e.userData.ringUp === !0 && (e.position.y = modelParams.fontHeight / 2 + modelParams.height * a * .39);
        }
        return modelParams.heightv = a, renderf();
    }, d = 0, modelParams.changeThickness = function() {
        return function(a) {
            var d, e, f, g;
            for (a = parseFloat(a), g = scene.children.last().children.slice(0), e = 0, f = g.length; f > e; e++) d = g[e], 
            scene.children.last().remove(d);
            return modelParams.thickness = a, modelParams.fontThickness = a, b(modelParams), 
            c(modelParams), modelParams.changeHeight(modelParams.heightv), renderf();
        };
    }(this), modelParams.changeSideSmooth = function() {
        return function(a) {
            var c, d, e, f;
            for (f = scene.children.last().children.slice(0), d = 0, e = f.length; e > d; d++) c = f[d], 
            null == c.userData.text && scene.children.last().remove(c);
            return modelParams.bottomSmooth = a, b(modelParams), modelParams.changeHeight(modelParams.heightv), 
            renderf();
        };
    }(this), modelParams.changeFontHeight = function() {
        return function(a) {
            var b, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
            for (n = scene.children.last().children.slice(0), d = 0, h = n.length; h > d; d++) b = n[d], 
            b.userData.text === !0 && scene.children.last().remove(b);
            for (o = scene.children.last().children.slice(0), e = 0, i = o.length; i > e; e++) b = o[e], 
            b.userData.meshDown === !0 && (b.position.y = -a / 2);
            for (p = scene.children.last().children.slice(0), f = 0, j = p.length; j > f; f++) b = p[f], 
            b.userData.meshUp === !0 && (b.position.y = a / 2);
            for (q = scene.children.last().children.slice(0), g = 0, k = q.length; k > g; g++) b = q[g], 
            b.userData.ringDown === !0 && (b.position.y = -a / 2 - modelParams.heightv);
            for (r = scene.children.last().children.slice(0), m = 0, l = r.length; l > m; m++) b = r[m], 
            b.userData.ringUp === !0 && (b.position.y = a / 2 + modelParams.heightv);
            return modelParams.fontHeight = a, c(modelParams), renderf();
        };
    }(this), modelParams.changeFont = function() {
        return function(a, b) {
            var c;
            return c = function() {
                var b, c, d, e, f;
                if (e = Math.PI * config.p2.size / 4, b = parseInt(e / a.length), b && a.length < 6) {
                    for (d = "", c = f = 0; (b >= 0 ? b >= f : f >= b) && (d += a, !(d.length > 5)); c = b >= 0 ? ++f : --f) ;
                    return d;
                }
                return a.substr(0, e);
            }, a = c(), modelParams.font = b, modelParams.changeText(a, b);
        };
    }(this), modelParams.changeText = function(a) {
        var b, d, e, f;
        for (f = scene.children.last().children.slice(0), d = 0, e = f.length; e > d; d++) b = f[d], 
        b.userData.text === !0 && scene.children.last().remove(b);
        return modelParams.text = a, c(modelParams), renderf();
    }, modelParams.changeSize = function(a) {
        var b, c, d, e;
        for (e = scene.children, c = 0, d = e.length; d > c; c++) b = e[c], null != b && b.userData.model === !0 && (b.scale.x = b.scale.y = b.scale.z = .055 * a);
        return renderf();
    }, modelParams.functionsTable["p-height"] = modelParams.changeHeight, modelParams.functionsTable["p-thickness"] = modelParams.changeThickness, 
    modelParams.functionsTable["p-text-height"] = modelParams.changeFontHeight, modelParams.functionsTable["p-side-smooth"] = modelParams.changeSideSmooth, 
    modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, modelParams.functionsTable["p-panel-text"] = modelParams.changeText, 
    modelParams.functionsTable["p-size"] = modelParams.changeSize, null === loadedModels.mring ? (b(modelParams), 
    modelParams.text = "MYOMYO", c(modelParams), loadedModels.mring = a.clone(), a.scale.x = a.scale.y = a.scale.z = .055 * config.p3.size, 
    scene.add(a)) : (a = loadedModels.mring.clone(), changeMaterialNew(a, modelParams.material), 
    a.scale.x = a.scale.y = a.scale.z = .055 * config.p3.size, scene.add(a)), $("#ajax-loading").hide();
}, qtE = function(a) {
    function b(a, c) {
        var d;
        b.__super__.constructor.apply(this, arguments), this.qab = a, this.text = new THREE.Object3D(), 
        this.geometryTexts = [], void 0 !== c.qup && (this.qiu(), d = function(b, c) {
            for (a in c) void 0 !== c[a] && (b[a] = c[a]);
            return b;
        }, d(this.options, c), this.flag_qqe = !0);
    }
    return __extends(b, a), b.prototype.createTextGeometry = function(a) {
        var b, c, d, e;
        return c = new THREE.TextGeometry(a, this.options), c.computeBoundingBox(), c.computeVertexNormals(), 
        THREE.GeometryUtils.center(c), e = function(a, b, c) {
            var d, e, f, g, h, i, j, k, l;
            k = a.vertices, c = Math.abs(0 - b.z), f = 0 - b.z, l = [];
            for (h in k) i = k[h], j = k[h], e = j.x / c, g = c * Math.sin(e), f = c * Math.cos(e), 
            d = new THREE.Vector2(g, f).normalize(), j.x = g + b.x + d.x * j.z, l.push(j.z = f + b.z + d.y * j.z);
            return l;
        }, b = silverMaterial.clone(), d = new THREE.Mesh(c, b);
    }, b.prototype.qeg = function(a) {
        var b;
        for (b in a) this.options[b] = a[b];
    }, b.prototype.qiu = function() {
        this.options = {
            isSpaceFixed: !1,
            text: "FFFFFF",
            qrK: 30,
            position: 0,
            size: 0,
            fontHeight: 2,
            fontThickness: 1,
            height: .4,
            curveSegments: 4,
            quj: 15.8,
            font: "helvetiker",
            weight: "normal",
            style: "normal",
            bevelThickness: .01,
            bevelSize: .1,
            bevelSegments: 1,
            bevelEnabled: !0,
            qrn: 1,
            extrudeMaterial: 0
        };
    }, b.prototype.update = function(a) {
        var b;
        this.flag_qqe = a.text !== this.options.text || a.font !== this.options.font ? !0 : !1, 
        b = function(a, b) {
            var c;
            for (c in b) void 0 !== b[c] && (a[c] = b[c]);
            return a;
        }, b(this.options, a), this.create();
    }, b.prototype.qau = function() {
        var a, b;
        a = this.qab;
        for (b in this.geometryTexts) a.qaq(this.geometryTexts[b]);
        this.geometryTexts.length = 0, this.create();
    }, b.prototype.create = function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        for (h = this.qab, n = void 0, n = this.options.text.length + .9, this.options.text.length > 6 && (n = this.options.text.length + 1.2), 
        8 === this.options.text.length && (n = this.options.text.length + 1.3), 9 === this.options.text.length && (n = this.options.text.length + 1.6), 
        10 === this.options.text.length && (n = this.options.text.length + 1.7), 11 === this.options.text.length && (n = this.options.text.length + 1.8), 
        12 === this.options.text.length && (n = this.options.text.length + 1.9), l = void 0, 
        d = [], l = 0; n > l; ) f = this.options.position + l / n, f > 1 && (f -= 1), d.push(this.options.qup.getPointAt(f)), 
        l++;
        if (this.flag_qqe) {
            for (a in this.geometryTexts) this.text.remove(this.geometryTexts[a]);
            this.geometryTexts.length = 0;
        }
        i = 0, r = [];
        for (m in this.options.text) " " !== this.options.text[m] ? (q = void 0, this.flag_qqe ? (q = this.createTextGeometry(this.options.text[m]), 
        this.geometryTexts.push(q), this.text.add(q), q.qpm = !0) : (q = this.geometryTexts[i], 
        i++), q.position = d[m], o = new THREE.Vector3(0, 0, 1), f = this.options.position + m / n, 
        f > 1 && (f -= 1), g = this.options.qup.getTangentAt(f), p = g, k = p.applyAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2), 
        j = o.angleTo(k), q.setRotationFromQuaternion(new THREE.Quaternion()), q.rotateY(j), 
        k.x < 0 && q.rotateY(2 * (Math.PI - j)), e = q.geometry.boundingBox, b = this.options.fontHeight / (e.max.y - e.min.y), 
        c = this.options.fontThickness / (e.max.z - e.min.z), r.push(q.scale.set(b, b, c))) : r.push(void 0);
        return r;
    }, b;
}(THREE.Mesh), qyt = function(a) {
    function b(a, c) {
        b.__super__.constructor.apply(this, arguments), this.__v1 = new THREE.Vector2(), 
        this.__v2 = new THREE.Vector2(), this.__v3 = new THREE.Vector2(), this.__v4 = new THREE.Vector2(), 
        this.__v5 = new THREE.Vector2(), this.__v6 = new THREE.Vector2(), this.qiu(c), this.addShape(a), 
        this.computeFaceNormals(), this.computeVertexNormals();
    }
    return __extends(b, a), b;
}(THREE.Geometry), qyt.prototype.addShapeList = function(a, b) {
    var c, d, e;
    for (c = a.length, d = 0; c > d; ) e = a[d], this.addShape(e, b), d++;
}, qyt.prototype.qiu = function(a) {
    var b, c;
    c = {}, c.amount = 1.5, c.curveSegments = 30, c.bevelEnabled = !0, c.bevelSegments = 5, 
    c.steps = 1, c.holeBevelSize = .1, c.bevelSize = .1, c.bevelThickness = .1, c.frontContourBevelSize = .1, 
    c.frontContourBevelThickness = .1, c.backContourBevelSize = .1, c.backContourBevelThickness = .1, 
    c.frontHoleBevelSize = .1, c.frontHoleBevelThickness = .1, c.backHoleBevelSize = .1, 
    c.backHoleBevelThickness = .1, c.innerRadius = 14, c.outerRadius = 15, c.height = 2, 
    c.thickness = 1;
    for (b in a) c[b] = a[b];
    this.options = c;
}, qyt.prototype.addShape = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb;
    if (F = function(a, b, c) {
        return b || console.log("die"), b.clone().multiplyScalar(c).add(a);
    }, G = function(a, b, c) {
        return lb(a, b, c);
    }, nb = function(a, b, c) {
        var d, e, f, g, h, i;
        return h = Math.atan2(b.y - a.y, b.x - a.x), g = Math.atan2(c.y - a.y, c.x - a.x), 
        h > g && (g += 2 * Math.PI), f = (h + g) / 2, d = -Math.cos(f), i = -Math.sin(f), 
        e = new THREE.Vector2(d, i);
    }, lb = function(a) {
        return function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p;
            return i = a.__v1, f = a.__v2, h = a.__v3, e = a.__v4, o = a.__v5, n = a.__v6, k = void 0, 
            j = void 0, p = void 0, g = void 0, l = void 0, m = void 0, i.set(b.x - c.x, b.y - c.y), 
            f.set(b.x - d.x, b.y - d.y), k = i.normalize(), j = f.normalize(), h.set(-k.y, k.x), 
            e.set(j.y, -j.x), o.copy(b).add(h), n.copy(b).add(e), o.equals(n) ? e.clone() : (o.copy(c).add(h), 
            n.copy(d).add(e), p = k.dot(e), g = n.sub(o).dot(e), 0 === p && (console.log("Either infinite or no solutions!"), 
            console.log(0 === g ? "Its finite solutions." : "Too bad, no solutions.")), l = g / p, 
            0 > l ? nb(b, c, d) : (m = k.multiplyScalar(l).add(o), m.sub(b).clone()));
        };
    }(this), P = function() {
        var a, b, e, f;
        if (c) {
            for (f = 0, a = db * f, e = 0; g > e; ) b = L[e], tb(b[2] + a, b[1] + a, b[0] + a, !0), 
            e++;
            for (f = s + 2 * d, a = db * f, e = 0; g > e; ) b = L[e], tb(b[0] + a, b[1] + a, b[2] + a, !1), 
            e++;
        } else {
            for (e = 0; g > e; ) b = L[e], tb(b[2], b[1], b[0], !0), e++;
            for (e = 0; g > e; ) b = L[e], tb(b[0] + db * s, b[1] + db * s, b[2] + db * s, !1), 
            e++;
        }
    }, gb = function() {
        var a, b, c, d;
        for (c = 0, l(D, c), c += D.length, d = 0, b = I.length; b > d; ) a = I[d], l(a, c), 
        c += a.length, d++;
    }, l = function(a, b) {
        var c, e, f, g, h, i, j, k, l, m, n;
        for (e = void 0, n = void 0, c = a.length; --c >= 0; ) for (e = c, n = c - 1, 0 > n && (n = a.length - 1), 
        k = 0, l = s + 2 * d, k = 0; l > k; ) f = db * k, m = db * (k + 1), j = b + e + f, 
        i = b + n + f, h = b + n + m, g = b + e + m, sb(j, i, h, g, a, k, l, e, n), k++;
    }, o = function(a, b, c) {
        fb.vertices.push(new THREE.Vector3(a, b, c));
    }, tb = function(b, c, d, e) {
        var f;
        b += rb, c += rb, d += rb, fb.faces.push(new THREE.Face3(b, c, d, null, null, n)), 
        f = e ? E.generateBottomUV(fb, a, $, b, c, d) : E.generateTopUV(fb, a, $, b, c, d), 
        fb.faceVertexUvs[0].push(f);
    }, sb = function(b, c, d, e, f, g, h, i, j) {
        var k;
        b += rb, c += rb, d += rb, e += rb, fb.faces.push(new THREE.Face3(b, c, e, null, null, pb)), 
        fb.faces.push(new THREE.Face3(c, d, e, null, null, pb)), k = E.generateSideWallUV(fb, a, f, $, b, c, d, e, g, h, i, j), 
        fb.faceVertexUvs[0].push([ k[0], k[1], k[3] ]), fb.faceVertexUvs[0].push([ k[1], k[2], k[3] ]);
    }, $ = this.options, Q = $.bevelThickness, J = $.bevelSize, d = $.bevelSegments, 
    B = $.frontContourBevelSize, R = $.backContourBevelSize, j = $.frontHoleBevelSize, 
    V = $.backHoleBevelSize, S = $.frontContourBevelThickness, _ = $.backContourBevelThickness, 
    v = $.frontHoleBevelThickness, K = $.backHoleBevelThickness, Z = Math.max(j, V), 
    eb = Math.max(B, R), k = $.amount, this.qup = a, c = $.bevelEnabled, cb = $.curveSegments, 
    s = $.steps, wb = $.extrudePath, Y = void 0, ub = !1, n = $.qrn, pb = $.extrudeMaterial, 
    E = void 0 !== $.UVGenerator ? $.UVGenerator : WorldUVGenerator, this.shapebb = a.getBoundingBox(), 
    C = this.shapebb, vb = void 0, z = void 0, O = void 0, y = void 0, wb && (Y = wb.qef(s), 
    ub = !0, c = !1, vb = void 0 !== $.frames ? $.frames : new qom.qqx.FrenetFrames(wb, s, !1), 
    console.log(vb, "splineTube", vb.qok.length, "steps", s, "extrudePts", Y.length), 
    z = new THREE.Vector3(), O = new THREE.Vector3(), y = new THREE.Vector3(), console.log(Y)), 
    c || (d = 0, Q = 0, J = 0), H = void 0, x = void 0, W = void 0, fb = this, bb = [], 
    rb = this.vertices.length, U = a.extractPoints(cb), e = U.shape, I = U.holes, mb = !THREE.Shape.Utils.isClockWise(e)) {
        for (e = e.reverse(), x = 0, W = I.length; W > x; ) H = I[x], THREE.Shape.Utils.isClockWise(H) && (I[x] = H.reverse()), 
        x++;
        mb = !1;
    }
    for (L = THREE.Shape.Utils.triangulateShape(e, I), debug(L), D = e, x = 0, W = I.length; W > x; ) H = I[x], 
    e = e.concat(H), x++;
    for (A = void 0, N = void 0, p = void 0, m = void 0, jb = void 0, db = e.length, 
    kb = void 0, g = L.length, ab = void 0, b = D.length, debug(db, g, b), T = 180 / Math.PI, 
    X = [], w = 0, q = D.length, u = q - 1, t = w + 1; q > w; ) u === q && (u = 0), 
    t === q && (t = 0), i = D[w], h = D[u], f = D[t], X[w] = G(D[w], D[u], D[t]), u++, 
    t++, w++;
    for (hb = [], ob = void 0, M = X.concat(), x = 0, W = I.length; W > x; ) {
        for (H = I[x], ob = [], w = 0, q = H.length, u = q - 1, t = w + 1; q > w; ) u === q && (u = 0), 
        t === q && (t = 0), ob[w] = G(H[w], H[u], H[t]), u++, t++, w++;
        hb.push(ob), M = M.concat(ob), x++;
    }
    for (A = 0; d > A; ) {
        for (p = A / d, w = 0, q = D.length; q > w; ) N = R * Math.sin(p * Math.PI / 2), 
        ib = D[w], B > R && (ib = F(ib, X[w], B - R)), jb = F(ib, X[w], N), m = -_ * Math.sin((1 - p) * Math.PI / 2), 
        K > _ && (m -= K - _), o(jb.x, jb.y, m), w++;
        for (x = 0, W = I.length; W > x; ) {
            for (N = V * Math.sin(p * Math.PI / 2), H = I[x], ob = hb[x], w = 0, q = H.length; q > w; ) qb = H[w], 
            j > V && (qb = F(qb, ob[w], j - V)), jb = F(qb, ob[w], N), m = -K * Math.sin((1 - p) * Math.PI / 2), 
            _ > K && (m -= _ - K), o(jb.x, jb.y, m), w++;
            x++;
        }
        A++;
    }
    for (w = 0; db > w; ) N = db / 2 > w ? Math.max(B, R) : Math.max(j, V), jb = c ? F(e[w], M[w], N) : e[w], 
    ub ? (O.copy(vb.qok[0]).multiplyScalar(jb.x), z.copy(vb.binormals[0]).multiplyScalar(jb.y), 
    y.copy(Y[0]).add(O).add(z), o(y.x, y.y, y.z)) : o(jb.x, jb.y, 0), w++;
    for (r = void 0, r = 1; s >= r; ) {
        for (w = 0; db > w; ) N = db / 2 > w ? Math.max(B, R) : Math.max(j, V), jb = c ? F(e[w], M[w], N) : e[w], 
        ub ? (O.copy(vb.qok[r]).multiplyScalar(jb.x), z.copy(vb.binormals[r]).multiplyScalar(jb.y), 
        y.copy(Y[r]).add(O).add(z), o(y.x, y.y, y.z)) : o(jb.x, jb.y, k / s * r), w++;
        r++;
    }
    for (A = d - 1; A >= 0; ) {
        for (p = A / d, w = 0, q = D.length; q > w; ) N = B * Math.sin(p * Math.PI / 2), 
        ib = D[w], R > B && (ib = F(ib, X[w], R - B)), jb = F(ib, X[w], N), m = S * Math.sin((1 - p) * Math.PI / 2), 
        v > S && (m += v - S), o(jb.x, jb.y, k + m), w++;
        for (N = Z * Math.sin(p * Math.PI / 2), x = 0, W = I.length; W > x; ) {
            for (N = j * Math.sin(p * Math.PI / 2), H = I[x], ob = hb[x], w = 0, q = H.length; q > w; ) qb = H[w], 
            V > j && (qb = F(qb, ob[w], V - j)), jb = F(qb, ob[w], N), m = v * Math.sin((1 - p) * Math.PI / 2), 
            S > v && (m += S - v), ub ? o(jb.x, jb.y + Y[s - 1].y, Y[s - 1].x + m) : o(jb.x, jb.y, k + m), 
            w++;
            x++;
        }
        A--;
    }
    P(), gb();
}, debug = function() {}, WorldUVGenerator = {
    generateTopUV: function(a, b, c, d, e, f) {
        var g, h, i, j, k, l;
        return g = a.vertices[d].x, l = a.vertices[d].y, k = a.vertices[e].x, j = a.vertices[e].y, 
        i = a.vertices[f].x, h = a.vertices[f].y, [ new THREE.Vector2(g, l), new THREE.Vector2(k, j), new THREE.Vector2(i, h) ];
    },
    generateBottomUV: function(a, b, c, d, e, f) {
        return this.generateTopUV(a, b, c, d, e, f);
    },
    generateSideWallUV: function(a, b, c, d, e, f, g, h) {
        var i, j, k, l, m, n, o, p, q, r, s, t;
        return p = a.vertices[e].x, n = a.vertices[e].y, l = a.vertices[e].z, t = a.vertices[f].x, 
        s = a.vertices[f].y, r = a.vertices[f].z, k = a.vertices[g].x, j = a.vertices[g].y, 
        i = a.vertices[g].z, q = a.vertices[h].x, o = a.vertices[h].y, m = a.vertices[h].z, 
        Math.abs(n - s) < .01 ? [ new THREE.Vector2(p, 1 - l), new THREE.Vector2(t, 1 - r), new THREE.Vector2(k, 1 - i), new THREE.Vector2(q, 1 - m) ] : [ new THREE.Vector2(n, 1 - l), new THREE.Vector2(s, 1 - r), new THREE.Vector2(j, 1 - i), new THREE.Vector2(o, 1 - m) ];
    }
};

var NecklaceText, NeklaceSymbol;

NecklaceText = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    for (c = a.font, r = a.str, m = a.radius, q = a.size, p = a.rotation, b = a.diagonal, 
    j = a.leftBorder, o = a.rightBorder, q = q || (q = 5.4), b = b || (b = !1), p = p || (p = 0), 
    f = .001, j = j || (j = 1), o = o || (o = .5), d = new THREE.Geometry(), l = new THREE.Mesh(d, silverMaterial.clone()), 
    l.userData.symbols = [], t = 0, n = new THREE.Raycaster(), h = function(a, b, c, d, e) {
        var f, g;
        return g = new THREE.Vector3(b, c, d), n.set(g, e), f = n.intersectObject(a), f[0] ? f[0].distance : 0;
    }, i = function(a, c) {
        var e, f, g, i;
        return f = l.userData.symbols[c], d.computeBoundingBox(), a.computeBoundingBox(), 
        i = 0, g = 0, 1 === r.length ? g = 0 : b && (0 === c ? g = .5 : (g = -.5, i = .5)), 
        e = 0, b && (e = -2), f.object = new THREE.Mesh(a.clone()), f.maxX = a.boundingBox.max.x, 
        f.minX = a.boundingBox.min.x, f.boxWidth = f.maxX - f.minX, f.leftToRight = h(f.object, f.minX, j, 0, new THREE.Vector3(1, 0, 0)), 
        f.rightToLeft = h(f.object, f.maxX, o, 0, new THREE.Vector3(-1, 0, 0)), f.preTranslateX = 0 - f.minX - f.leftToRight, 
        f.postTranslateX = f.rightToLeft, f.width = f.boxWidth - f.leftToRight - f.rightToLeft, 
        f.translateX = 0 === c ? f.preTranslateX + e : d.boundingBox.max.x + f.preTranslateX - l.userData.symbols[c - 1].postTranslateX + e, 
        f.translateY = g, f.translateZ = i, a.applyMatrix(new THREE.Matrix4().makeTranslation(f.translateX, f.translateY, f.translateZ)), 
        d.merge(a), d.computeBoundingBox(), t += f.width + e;
    }, s = function(a, b, c) {
        var d, e, f, g, h, i, j, k, l;
        k = a.vertices, c = Math.abs(0 - b.z), f = 0 - b.z, l = [];
        for (h in k) i = k[h], j = k[h], e = j.x / c, g = c * Math.sin(e), f = c * Math.cos(e), 
        d = new THREE.Vector2(g, f).normalize(), j.x = g + b.x + d.x * j.z, l.push(j.z = f + b.z + d.y * j.z);
        return l;
    }, w = r.split(""), g = u = 0, v = w.length; v > u; g = ++u) k = w[g], l.userData.symbols[g] = {
        index: g,
        symbol: k,
        rightToLeft: 0,
        leftToRight: 0
    }, a.lt = k, e = NeklaceSymbol(a), i(e, g);
    return 0 !== p && s(d, new THREE.Vector3(0, 0, -1 * p)), l.textWidth = t, l.nowText = r, 
    l;
}, NeklaceSymbol = function(a) {
    var b, c, d, e, f, g, h;
    return d = a.font, f = a.lt, g = a.size, g = g || (g = 5.4), e = .001, /[a-zA-Zа-яА-Я0-9]/g.test(f) || (d = "icomoon", 
    g *= .5), console.log("---" + f), c = config.p0.bevelThickness / 100 || .3, b = config.p0.bevelSize / 100 || .2, 
    h = new THREE.TextGeometry(f, {
        font: d.toLowerCase(),
        size: g,
        height: e,
        curveSegments: 10,
        bevelEnabled: !0,
        bevelThickness: c,
        bevelSize: b
    });
};

var RingText;

RingText = function(a, b, c) {
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    for (null == b && (b = !1), null == c && (c = !1), i = a.font, q = a.str, m = a.radius, 
    p = a.size, k = a.height, m = m || (m = 9.57), e = 0, d = 0, n = .01, o = .4, p = p || (p = 3.5), 
    k = k || (k = 1.22), j = new THREE.Geometry(), f = 0, h = v = 0, w = q.length; w >= 0 ? w > v : v > w; h = w >= 0 ? ++v : --v) r = new THREE.TextGeometry(q[h], {
        font: i,
        size: p,
        height: k
    }), l = function(a) {
        var b, c;
        return a.computeBoundingBox(), c = a.boundingBox, b = new THREE.Vector3(), b.addVectors(c.min, c.max), 
        b.multiplyScalar(-.5), a.applyMatrix(new THREE.Matrix4().makeTranslation(b.x, b.y, b.z)), 
        a.computeBoundingBox(), b;
    }, l(r), r.textWidth = r.boundingBox.max.x - r.boundingBox.min.x, f += r.textWidth / 2, 
    g = function() {
        return function(a, b, c) {
            var d, e, f, g, i, j, k;
            for (e = b, d = j = 0, k = a.length; k >= 0 ? k > j : j > k; d = k >= 0 ? ++j : --j) f = a[d], 
            g = f[0], i = f[1], i === q[h] && g === q[h - 1] ? e -= c : g === q[h - 1] && "*" === i ? e -= c : i === q[h] && "*" === g && (e -= c);
            return e;
        };
    }(this), "W" === q[h] && ("A" === q[parseInt(h) - 1] && (f -= 1.35), "L" === q[parseInt(h) - 1] && (f -= 1)), 
    "T" === q[h] && ("A" === q[parseInt(h) - 1] && (f -= .3), "L" === q[parseInt(h) - 1] && (f -= 1.1)), 
    "V" === q[h] && ("A" === q[parseInt(h) - 1] && (f -= 1.45), "L" === q[parseInt(h) - 1] && (f -= 1.35), 
    "P" === q[parseInt(h) - 1] && (f -= .6), "F" === q[parseInt(h) - 1] && (f -= .6), 
    "D" === q[parseInt(h) - 1] && (f -= .4), "B" === q[parseInt(h) - 1] && (f -= .5), 
    "R" === q[parseInt(h) - 1] && (f -= .3)), "Y" === q[h] && ("A" === q[parseInt(h) - 1] && (f -= 1.45), 
    "L" === q[parseInt(h) - 1] && (f -= 1.35), "P" === q[parseInt(h) - 1] && (f -= .5), 
    "F" === q[parseInt(h) - 1] && (f -= .5), "D" === q[parseInt(h) - 1] && (f -= .5), 
    "B" === q[parseInt(h) - 1] && (f -= .5), "R" === q[parseInt(h) - 1] && (f -= .5), 
    "O" === q[parseInt(h) - 1] && (f -= .5)), "A" === q[h] && ("W" === q[parseInt(h) - 1] && (f -= 1.35), 
    "T" === q[parseInt(h) - 1] && (f -= 1.35), "Y" === q[parseInt(h) - 1] && (f -= 1.45), 
    "V" === q[parseInt(h) - 1] && (f -= 1.45), "P" === q[parseInt(h) - 1] && (f -= 1), 
    "F" === q[parseInt(h) - 1] && (f -= .55), "D" === q[parseInt(h) - 1] && (f -= .4)), 
    "J" === q[h] && ("W" === q[parseInt(h) - 1] && (f -= 1), "T" === q[parseInt(h) - 1] && (f -= 1.1), 
    "Y" === q[parseInt(h) - 1] && (f -= 1.4), "V" === q[parseInt(h) - 1] && (f -= 1.35), 
    "P" === q[parseInt(h) - 1] && (f -= .3), "F" === q[parseInt(h) - 1] && (f -= .5)), 
    "O" === q[h] && "Y" === q[parseInt(h) - 1] && (f -= .2), /[а-яА-Я]/g.test(q[h]) && "Г" === q[parseInt(h) - 1] && (f += .3), 
    ("З" === q[h] || "Х" === q[h] || "Ф" === q[h] || "О" === q[h] || "Л" === q[h] || "Э" === q[h] || "Я" === q[h] || "С" === q[h]) && "Г" === q[parseInt(h) - 1] && (f -= .5), 
    ("У" === q[h] || "З" === q[h] || "Х" === q[h] || "Ъ" === q[h] || "Л" === q[h] || "Д" === q[h] || "Ж" === q[h] || "Э" === q[h] || "Т" === q[h]) && "О" === q[parseInt(h) - 1] && (f -= .15), 
    "А" === q[h] && "Г" === q[parseInt(h) - 1] && (f -= .9), "Д" === q[h] && "Г" === q[parseInt(h) - 1] && (f -= .6), 
    "О" === q[h] && "М" === q[parseInt(h) - 1] && (f += .3), "О" === q[h] && "К" === q[parseInt(h) - 1] && (f -= 0), 
    "Т" === q[h] && "А" === q[parseInt(h) - 1] && (f -= .6), ("Р" === q[h] || "В" === q[h] || "Ш" === q[h] || "И" === q[h] || "М" === q[h] || "Й" === q[h] || "Г" === q[h] || "Щ" === q[h] || "Е" === q[h] || "Ц" === q[h] || "Ь" === q[h] || "Ё" === q[h] || "К" === q[h] || "Б" === q[h] || "Ю" === q[h]) && "П" === q[parseInt(h) - 1] && (f += .4), 
    ("Ч" === q[h] || "Ъ" === q[h]) && "П" === q[parseInt(h) - 1] && (f -= .2), "Ъ" === q[h] && "Ь" === q[parseInt(h) - 1] && (f -= .4), 
    "Ь" === q[h] && "Ъ" === q[parseInt(h) - 1] && (f += .3), f = g([ "КС", "КФ", "КО", "СО", "ХО", "ТО", "ТЛ", "ТД", "ТС", "ТЯ", "ТО", "АЬ", "АЧ", "АФ", "ЮЛ", "ЮЪ", "ЮД", "ЮУ", "ЮЖ", "ЮЗ", "ЮТ", "ФЗ", "ФЖ", "ФУ", "ЖС", "ЖФ", "ЖО", "РА", "ХФ" ], f, .25), 
    f = g([ "АЪ", "ЦЪ", "ЦЧ", "ЦТ", "ЩЪ", "ЩЧ", "ЩТ", "ЪУ", "ЪЪ", "ФЪ" ], f, .4), f = g([ "ФТ", "ЪТ", "ТА" ], f, .6), 
    f = g([ "*Ы" ], f, 0), f = g([ "УА" ], f, .69), f = c ? g([ "Ф*" ], f, -.99) : g([ "Ф*" ], f, .39), 
    f = g([ "ФЫ" ], f, -.49), "X" === q[h] && ("D" === q[parseInt(h) - 1] && (f -= .7), 
    "B" === q[parseInt(h) - 1] && (f -= .35), "R" === q[parseInt(h) - 1] && (f -= .3)), 
    "У" === q[h] && r.applyMatrix(new THREE.Matrix4().makeTranslation(0, -.05, 0)), 
    "1" !== q[h] && "1" === q[h - 1] && (f += 1.5), "I" === q[h] && h < q.length - 1 && "I" !== q[h - 1] && (f += .405), 
    "I" !== q[h] && h < q.length - 1 && "I" === q[h - 1] && (f += .405), c && (f += .8), 
    u = "Ц" === q[h] || "Щ" === q[h] && c ? -.2 : "Д" === q[h] && c ? -.2 : "Й" === q[h] && c ? .3 : "Ё" === q[h] && c ? 0 : 0, 
    r.applyMatrix(new THREE.Matrix4().makeTranslation(f, u, 0)), u = "Й" === q[h] ? 1 : 1, 
    u = "Д" === q[h] ? 1.01 : 1, r.applyMatrix(new THREE.Matrix4().makeScale(1, u, 1)), 
    "S" !== q[h] && "Z" !== q[h] && "X" !== q[h] && "Я" !== q[h] && "З" !== q[h] && "У" !== q[h] && "Э" !== q[h] || 0 !== h || r.applyMatrix(new THREE.Matrix4().makeTranslation(-.2, 0, 0)), 
    "Ы" === q[h] && 0 === h && r.applyMatrix(new THREE.Matrix4().makeTranslation(-.6, 0, 0)), 
    "Ф" !== q[h] || c || r.applyMatrix(new THREE.Matrix4().makeTranslation(-3.2, -.95, 0)), 
    "Ф" !== q[h] && (f += r.textWidth / 2 - .4), "Ы" === q[h] && !b && h < q.length - 1 && (f -= .3), 
    b && (f += r.textWidth - .8), d = f + .1, j.merge(r);
    return t = function(a, b, c) {
        var d, e, f, g, i, j, k, l;
        k = a.vertices, c = Math.abs(0 - b.z), e = 0 - b.z, l = [];
        for (g in k) i = k[g], j = k[g], h = j.x / c, f = c * Math.sin(h), e = c * Math.cos(h), 
        d = new THREE.Vector2(f, e).normalize(), j.x = f + b.x + d.x * j.z, l.push(j.z = e + b.z + d.y * j.z);
        return l;
    }, s = new THREE.Mesh(j, silverMaterial.clone()), c ? t(j, new THREE.Vector3(0, 0, -8.9)) : t(j, new THREE.Vector3(0, 0, -9.55)), 
    "Ф" === q && (d -= .15), q.length >= 7 && (d -= .19), q.length >= 3 && (d -= .1), 
    s.angleTotal = .107 * d, s.position.z = m / s.scale.x, s.radius = m, s;
};

var DiamondRing, buildGeometry, example, handleFiles, readAsciiStl, readBinaryStl, readObj, readStl, triangle;

DiamondRing = function() {
    var a, b, c, d;
    return addRotateModelHandlers(), d = [ 0, Math.PI ], controls.minPolarAngle = d[0], 
    controls.maxPolarAngle = d[1], controls.minDistance = 40, controls.maxDistance = 68, 
    controls.center = new THREE.Vector3(), camera.position.z = 60, camera.position.y = 55, 
    camera.position.x = 0, a = new THREE.Object3D(), c = new THREE.LoadingManager(), 
    b = new THREE.OBJLoader(c), null === loadedModels.diamondRing ? ($("#ajax-loading").show(), 
    loadedModels.diamondRing = {}, example("obj/diamond/backend/ring1.obj", function(b) {
        return b.traverse(function(a) {
            return a instanceof THREE.Mesh ? a.material = silverMaterial.clone() : void 0;
        }), b.position.y = 10, b.scale.x = b.scale.z = b.scale.y = .08 * config.p1.size * .08115, 
        b.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -100, 0)), b.userData.ring = !0, 
        a.add(b), loadedModels.diamondRing = a.clone(), $("#ajax-loading").hide(), renderf();
    }), example("obj/diamond/backend/diamond1.obj", function(b) {
        return b.traverse(function(a) {
            return a instanceof THREE.Mesh ? a.material = silverMaterial.clone() : void 0;
        }), b.position.y = 9.5, b.userData.diamond = !0, b.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 88, 0)), 
        b.scale.x = b.scale.z = b.scale.y = .075 * config.p1.sizeDiamond * .07, a.add(b), 
        loadedModels.diamondRing = a.clone(), $("#ajax-loading").hide(), renderf();
    }), a.userData.model = !0, a.position.y = 0, scene.add(a)) : (a = loadedModels.diamondRing, 
    changeMaterialNew(a, modelParams.material), scene.add(a)), modelParams.n = 1, modelParams.changeSizeDiamond = function(a) {
        var b, c, d, e, f, g, h, i, j;
        for (modelParams.sizeDiamond = .05 * a, i = scene.children, e = 0, g = i.length; g > e; e++) if (d = i[e], 
        null != d && d.userData.model === !0) for (j = d.children, f = 0, h = j.length; h > f; f++) b = j[f], 
        b.userData.diamond === !0 && (c = modelParams.n >= 2 && modelParams.n <= 5 ? .8 : 1, 
        b.scale.x = b.scale.y = b.scale.z = a * c * .075 * .07);
        return modelParams.price(), renderf();
    }, modelParams.changeDiamondModel = function(a, b) {
        var c, d, e, f, g, h, i, j, k;
        for (a = parseInt(a), modelParams.n = a, $("#ajax-loading").show(), d = null, j = scene.children, 
        f = 0, h = j.length; h > f; f++) if (e = j[f], e.userData.model === !0) {
            for (k = e.children, g = 0, i = k.length; i > g; g++) c = k[g], null != c && c.userData.diamond === !0 && e.remove(c);
            d = e;
        }
        return example("obj/diamond/backend/diamond" + a + ".obj", function(c) {
            var e, f;
            return c.traverse(function(a) {
                return a instanceof THREE.Mesh ? (a.material = silverMaterial.clone(), changeMeshMaterial(a, modelParams.material)) : void 0;
            }), c.position.y = 9.5, c.userData.diamond = !0, f = a >= 2 && 5 >= a ? .8 : 1, 
            e = function() {
                switch (a) {
                  case 6:
                    return 30;

                  case 5:
                    return 10;

                  case 4:
                    return 10;

                  default:
                    return 0;
                }
            }(), c.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 88 - e, 0)), 
            c.scale.x = c.scale.z = c.scale.y = modelParams.sizeDiamond * f * .075 * .07, d.add(c), 
            null != b && modelParams.changeSizeDiamond(b), $("#ajax-loading").hide(), renderf();
        }), renderf();
    }, modelParams.changeRingModel = function(a) {
        var d, e, f, g, h, i, j, k, l;
        for ($("#ajax-loading").show(), d = null, k = scene.children, g = 0, i = k.length; i > g; g++) if (e = k[g], 
        e.userData.model === !0) {
            for (l = e.children, h = 0, j = l.length; j > h; h++) f = l[h], null != f && f.userData.ring === !0 && e.remove(f);
            d = e;
        }
        return b = new THREE.OBJLoader(c), example("obj/diamond/backend/ring" + a + ".obj", function(a) {
            return a.traverse(function(a) {
                return a instanceof THREE.Mesh ? (a.material = silverMaterial.clone(), changeMeshMaterial(a, modelParams.material)) : void 0;
            }), a.position.y = 10, a.userData.ring = !0, a.scale.x = a.scale.z = a.scale.y = .08 * modelParams.size * .08115, 
            a.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -100, 0)), d.add(a), 
            $("#ajax-loading").hide(), renderf();
        }), renderf();
    }, modelParams.changeSize = function(a) {
        var b, c, d, e, f, g, h, i;
        for (modelParams.size = a, h = scene.children, d = 0, f = h.length; f > d; d++) if (b = h[d], 
        null != b && b.userData.model === !0) for (i = b.children, e = 0, g = i.length; g > e; e++) c = i[e], 
        c.userData.ring === !0 && (c.scale.x = c.scale.y = c.scale.z = .08 * a * .08115);
        return modelParams.price(), renderf();
    }, modelParams.functionsTable["p-ring-diamond"] = modelParams.changeDiamondModel, 
    modelParams.functionsTable["p-ring"] = modelParams.changeRingModel, modelParams.functionsTable["p-size-diamond"] = modelParams.changeSizeDiamond, 
    modelParams.functionsTable["p-size"] = modelParams.changeSize, modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, 
    modelParams.functionsTable["p-panel-text"] = modelParams.changeText;
}, readObj = function(a, b, c) {
    var d, e, f, g, h;
    for (f = a.split(/[\r\n]/g), e = 0; e < f.length; ) g = f[e].trim().split(/\s+/), 
    "v" === g[0] && (h = new THREE.Vector3(100 * parseFloat(g[1]), 100 * parseFloat(g[2]), 100 * parseFloat(g[3])), 
    b.push(h)), "f" === g[0] && (d = new THREE.Face3(parseFloat(g[1]) - 1, parseFloat(g[2]) - 1, parseFloat(g[3]) - 1), 
    c.push(d)), e++;
}, readAsciiStl = function(a, b, c) {
    var d, e, f, g, h, i, j, k, l, m, n;
    for (j = !1, f = !1, m = [], n = {}, g = 0; g < a.length; ) h = a[g], j ? h.search("endsolid") > -1 ? j = !1 : f ? h.search("endfacet") > -1 ? (f = !1, 
    e = new THREE.Face3(m[0], m[1], m[2]), c.push(e)) : h.search("vertex") > -1 && (d = h.substr(h.search("vertex") + 7), 
    d = d.trim(), i = d.split(/\s+/), k = new THREE.Vector3(parseFloat(i[0]), parseFloat(i[1]), parseFloat(i[2])), 
    l = b.length, d in n ? l = n[d] : (b.push(k), n[d] = l), m.push(l)) : h.search("facet normal") > -1 && (f = !0, 
    m = []) : h.search("solid") > -1 && (j = !0), g++;
    n = null;
}, triangle = function() {
    var a;
    2 === arguments.length ? (this._buffer = arguments[0], this._sa = arguments[1]) : (this._sa = 0, 
    this._buffer = new ArrayBuffer(50)), this.__byte = new Uint8Array(this._buffer), 
    this.normal = new Float32Array(this._buffer, this._sa + 0, 3), this.v1 = new Float32Array(this._buffer, this._sa + 12, 3), 
    this.v2 = new Float32Array(this._buffer, this._sa + 24, 3), this.v3 = new Float32Array(this._buffer, this._sa + 36, 3), 
    a = new Int16Array(this._buffer, this._sa + 48, 1), Object.defineProperty(this, "attr", {
        get: function() {
            return a[0];
        },
        set: function(b) {
            a[0] = b;
        },
        enumerable: !0
    });
}, readBinaryStl = function(a, b, c) {
    var d, e, f, g, h, i, j, k, l, m, n, o, p;
    for (e = new ArrayBuffer(a.length), d = new Uint8Array(e), h = 0; h < a.length; ) d[h] = a.charCodeAt(h), 
    h++;
    for (m = new Uint32Array(e, 80, 1), o = [ 0, 0, 0 ], p = {}, l = 84, g = new triangle(), 
    h = 0; h < m[0]; ) {
        for (i = 0; 50 > i; ) g.__byte[i] = d[l + i], i++;
        n = new THREE.Vector3(g.v1[0], g.v1[1], g.v1[2]), j = "" + g.v1[0] + "," + g.v1[1] + "," + g.v1[2], 
        o[0] = b.length, j in p ? o[0] = p[j] : (b.push(n), p[j] = o[0]), n = new THREE.Vector3(g.v2[0], g.v2[1], g.v2[2]), 
        j = "" + g.v2[0] + "," + g.v2[1] + "," + g.v2[2], o[1] = b.length, j in p ? o[1] = p[j] : (b.push(n), 
        p[j] = o[1]), n = new THREE.Vector3(g.v3[0], g.v3[1], g.v3[2]), j = "" + g.v3[0] + "," + g.v3[1] + "," + g.v3[2], 
        o[2] = b.length, j in p ? o[2] = p[j] : (b.push(n), p[j] = o[2]), k = new THREE.Vector3(g.normal[0], g.normal[1], g.normal[2]), 
        f = new THREE.Face3(o[0], o[1], o[2], k), c.push(f), l += 50, h++;
    }
    p = null, d = void 0, e = null;
}, readStl = function(a, b, c) {
    var d, e;
    return a instanceof ArrayBuffer ? arrayBufferToBinaryString(a, function(a) {
        readBinaryStl(a, b, c);
    }) : (e = a.search("solid"), void (e > -1 && 10 > e ? (d = a.split(/[\r\n]/g), readAsciiStl(d, b, c)) : readBinaryStl(a, b, c)));
}, buildGeometry = function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    if (w = [], k = [], b.name.indexOf(".obj") > -1) readObj(a, w, k); else {
        if (!(b.name.indexOf(".stl") > -1)) return;
        readStl(a, w, k);
    }
    for (m in k) "last" !== m && (t = w[k[m].a], u = w[k[m].b], v = w[k[m].c], i = new THREE.Vector3(u.x - t.x, u.y - t.y, u.z - t.z), 
    j = new THREE.Vector3(v.x - t.x, v.y - t.y, v.z - t.z), s = new THREE.Vector3(i.y * j.z - i.z * j.y, i.z * j.x - i.x * j.z, i.x * j.y - i.y * j.x), 
    a = Math.sqrt(s.x * s.x + s.y * s.y + s.z * s.z), s.x /= a, s.y /= a, s.z /= a, 
    k[m].normal = s);
    p = 1e10, q = 1e10, r = 1e10, c = -1e10, d = -1e10, e = -1e10;
    for (m in w) p > w[m].x && (p = w[m].x), q > w[m].y && (q = w[m].y), r > w[m].z && (r = w[m].z), 
    c < w[m].x && (c = w[m].x), d < w[m].y && (d = w[m].y), e < w[m].z && (e = w[m].z);
    n = Math.max(c - p, d - q, e - r), n /= 200, f = (c + p) / 2, g = (d + q) / 2, h = (e + r) / 2;
    for (m in w) w[m].x -= f, w[m].y -= g, w[m].z -= h, w[m].x /= n, w[m].y /= n, w[m].z /= n;
    p = 1e10, q = 1e10, r = 1e10, c = -1e10, d = -1e10, e = -1e10;
    for (m in w) p > w[m].x && (p = w[m].x), q > w[m].y && (q = w[m].y), r > w[m].z && (r = w[m].z), 
    c < w[m].x && (c = w[m].x), d < w[m].y && (d = w[m].y), e < w[m].z && (e = w[m].z);
    return l = new THREE.Geometry(), l.vertices = w, l.faces = k, o = new THREE.Mesh(l, silverMaterial.clone());
}, handleFiles = function(a) {
    var b, c;
    c = new FileReader(), c.onload = function(b) {
        var c;
        c = b.target.result, buildGeometry(c, a[0]);
    }, b = a[0], c.readAsBinaryString(b);
}, example = function(a, b) {
    var c;
    c = new XMLHttpRequest(), c.open("GET", a, !0), c.onload = function() {
        var c, d;
        d = this.response, c = {}, c.name = a, b(buildGeometry(d, c));
    }, c.send("");
};

var Messager;

Messager = function() {
    var a, b;
    return addRotateModelHandlers(), b = [ 0, Math.PI ], controls.minPolarAngle = b[0], 
    controls.maxPolarAngle = b[1], controls.maxDistance = 28, camera.position.z = 100, 
    camera.position.y = 60, null === loadedModels.messager ? ($("#ajax-loading").show(), 
    loader.load("obj/carve/ring.obj", function(a) {
        var b, c;
        return a.traverse(function(a) {
            return a instanceof THREE.Mesh ? a.material = silverMaterial.clone() : void 0;
        }), a.userData.ring = !0, a.scale.x = a.scale.y = a.scale.z = .05 * config.p3.size, 
        b = new THREE.Object3D(), b.userData.model = !0, b.add(a), c = RingText({
            str: "MYO",
            font: config.p3.defaultFont,
            radius: 8.9,
            size: 2.92
        }, !1, !0), c.userData.text = !0, c.scale.x = c.scale.y = c.scale.z = .05 * config.p3.size, 
        c.position.z = c.radius * a.scale.x, b.add(c), b.rotation.y = Math.PI / 2, b.position.y = 5, 
        scene.add(b), loadedModels.messager = b.clone(), $("#ajax-loading").hide(), renderf();
    })) : (a = loadedModels.messager, changeMaterialNew(a, modelParams.material), scene.add(a)), 
    modelParams.changeText = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
        for (m = scene.children, p = [], g = 0, j = m.length; j > g; g++) if (c = m[g], 
        null != c && c.userData.model === !0) {
            for (d = null, n = c.children, h = 0, k = n.length; k > h; h++) e = n[h], e.userData.ring === !0 && (d = e);
            for (o = c.children, i = 0, l = o.length; l > i; i++) f = o[i], f.userData.text === !0 && (c.remove(f), 
            b = RingText({
                str: a,
                font: config.p3.defaultFont,
                radius: 8.9,
                size: 2.92
            }, !1, !0), b.userData.text = !0, b.scale.x = b.scale.y = b.scale.z = d.scale.x, 
            b.position.z = b.radius * d.scale.x, c.add(b));
            p.push(changeMaterialNew(c, modelParams.material));
        }
        return p;
    }, modelParams.changeFont = function(a, b) {
        return b || (b = config.p3.defaultFont), config.p3.defaultFont = b, modelParams.changeText(a, b);
    }, modelParams.changeSize = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n;
        for (l = scene.children, f = 0, i = l.length; i > f; f++) if (b = l[f], null != b && b.userData.model === !0) {
            for (c = null, m = b.children, g = 0, j = m.length; j > g; g++) d = m[g], d.userData.ring === !0 && (d.scale.x = d.scale.y = d.scale.z = .05 * a, 
            c = d);
            for (n = b.children, h = 0, k = n.length; k > h; h++) e = n[h], e.userData.text === !0 && (e.scale.x = e.scale.y = e.scale.z = c.scale.x, 
            e.position.z = e.radius * c.scale.x);
        }
        return modelParams.price(), renderf();
    }, modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, modelParams.functionsTable["p-panel-text"] = modelParams.changeText, 
    modelParams.functionsTable["p-size"] = modelParams.changeSize;
};

var Necklace;

Necklace = function() {
    var a, b;
    return _global.rotate = !1, removeRotateModelHandlers(), addDriftModelHandlers(), 
    controls.minPolarAngle = 1.25, controls.maxPolarAngle = 1.4, controls.maxDistance = 30, 
    camera.position.x = 0, camera.position.y = 0, camera.position.z = 0, a = new THREE.Object3D(), 
    a.userData.combine = !0, b = new THREE.Object3D(), b.userData.model = !0, null === loadedModels.necklace ? ($("#ajax-loading").show(), 
    loader.load("obj/textnecklace/necklace.obj", function(c) {
        var d, e, f, g, h;
        return c.traverse(function(a) {
            return a instanceof THREE.Mesh ? a.material = silverMaterial.clone() : void 0;
        }), h = NecklaceText({
            str: "myo",
            font: config.p4.defaultFont
        }), h.userData.text = !0, e = new THREE.TorusGeometry(.6, .2, 32, 32), f = new THREE.Mesh(e, silverMaterial.clone()), 
        f.userData.torus1 = !0, g = new THREE.Mesh(e.clone(), silverMaterial.clone()), g.userData.torus2 = !0, 
        d = c.clone(), d.rotation.y = Math.PI, c.userData.chainL = !0, d.userData.chainR = !0, 
        modelParams.changeDraw(h, f, g, c, d), b.add(f), b.add(g), b.add(h), b.scale.x = b.scale.y = b.scale.z = .8, 
        a.add(b), a.add(c), a.add(d), scene.add(a), loadedModels.necklace = a.clone(), $("#ajax-loading").hide(), 
        renderf();
    })) : (a = loadedModels.necklace, scene.add(a), changeMaterialNew(a, modelParams.material)), 
    modelParams.changeDraw = function(a, b, c, d, e) {
        return a.position.x = 0, b.position.y = 1, b.position.x = -a.textWidth / 2 - .4, 
        d.position.y = .6, d.position.x = -a.textWidth / 2 + .8, c.position.y = 1, c.position.x = a.textWidth / 2 + .4, 
        e.position.y = .6, e.position.x = a.textWidth / 2 - .8, a.position.x = -a.textWidth / 2;
    }, modelParams.changeFont = function(a, b) {
        return b || (b = config.p4.defaultFont), config.p4.defaultFont = b, "norican" === b && a.match(/[а-яА-ЯёЁ]/g) ? !1 : modelParams.changeText("");
    }, modelParams.changeFont = function(a, b) {
        return b || (b = config.p4.defaultFont), config.p4.defaultFont = b, modelParams.changeText(a);
    }, modelParams.changeText = function(c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
        for (console.log("xxx: " + c), c.length > 11 ? (camera.position.z = 40, controls.maxDistance = 40) : controls.maxDistance = 30, 
        l = 0, m = 0, h = null, i = null, d = null, e = null, b = null, v = a.children, 
        n = 0, r = v.length; r > n; n++) if (g = v[n], null != g && (g.userData.model === !0 || g.userData.chainL === !0 || g.userData.chainR === !0)) if (g.userData.chainL === !0) d = g; else if (g.userData.chainR === !0) e = g; else {
            for (b = g, w = g.children, o = 0, s = w.length; s > o; o++) k = w[o], k.userData.torus1 === !0 && (h = k);
            for (x = g.children, p = 0, t = x.length; t > p; p++) k = x[p], k.userData.torus2 === !0 && (i = k);
            for (y = g.children, q = 0, u = y.length; u > q; q++) j = y[q], null != j && j.userData.text === !0 && g.remove(j);
        }
        return f = NecklaceText({
            str: c,
            font: config.p4.defaultFont
        }), f.userData.text = !0, modelParams.changeDraw(f, h, i, d, e), b.add(f), changeMaterialNew(b, modelParams.material);
    }, modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, modelParams.functionsTable["p-panel-text"] = modelParams.changeText;
};

var Raw;

Raw = function() {
    var a, b;
    return addRotateModelHandlers(), b = [ 0, Math.PI ], controls.minPolarAngle = b[0], 
    controls.maxPolarAngle = b[1], controls.maxDistance = 38, camera.position.z = 100, 
    camera.position.y = 80, a = new THREE.Object3D(), a.userData.model = !0, null === loadedModels.raw ? ($("#ajax-loading").show(), 
    loader.load("obj/cross/left.obj", function(b) {
        var c, d;
        return b.traverse(function(a) {
            return a instanceof THREE.Mesh ? a.material = silverMaterial.clone() : void 0;
        }), b.children.last().userData.ring1 = !0, c = b.children.last().clone(), c.userData.ring2 = !0, 
        a.add(b.children.last()), a.add(c), d = RingText({
            str: "MYO",
            font: config.p5.defaultFont,
            size: 3.585
        }), d.userData.text = !0, d.position.y = -.03, a.add(d), c.rotation.y = Math.PI + d.angleTotal, 
        a.scale.x = a.scale.y = a.scale.z = .05 * config.p5.size, a.position.y = 10, scene.add(a), 
        loadedModels.raw = a.clone(), $("#ajax-loading").hide(), renderf();
    })) : (a = loadedModels.raw, scene.add(a), changeMaterialNew(a, modelParams.material)), 
    modelParams.changeText = function(b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
        for (n = scene.children, h = 0, k = n.length; k > h; h++) if (d = n[h], null != d && d.userData.model === !0) {
            for (e = null, o = d.children, i = 0, l = o.length; l > i; i++) f = o[i], f.userData.ring2 === !0 && (e = f);
            for (p = d.children, j = 0, m = p.length; m > j; j++) g = p[j], g.userData.text === !0 && (d.remove(g), 
            c = RingText({
                str: b,
                font: config.p5.defaultFont,
                size: 3.585
            }), c.userData.text = !0, c.position.y = -.03, e.rotation.y = Math.PI + c.angleTotal, 
            d.add(c));
        }
        return changeMaterialNew(a, modelParams.material);
    }, modelParams.changeFont = function(a, b) {
        return b || (b = config.p5.defaultFont), config.p5.defaultFont = b, modelParams.changeText(a, b);
    }, modelParams.changeSize = function(a) {
        var b, c, d, e;
        for (e = scene.children, c = 0, d = e.length; d > c; c++) b = e[c], null != b && b.userData.model === !0 && (b.scale.x = b.scale.y = b.scale.z = .05 * a);
        return modelParams.price(), renderf();
    }, modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, modelParams.functionsTable["p-panel-text"] = modelParams.changeText, 
    modelParams.functionsTable["p-size"] = modelParams.changeSize, modelParams.functionsTable["p-price"] = modelParams.price;
};

var addDriftModelHandlers, addRotateModelHandlers, camera, changeMaterialNew, changeMeshMaterial, controls, createMaterial, driftModelEndHandler, driftModelStartHandler, initGraphics, loader, manager, removeDriftModelHandlers, removeRotateModelHandlers, render, renderf, rotateModelEndHandler, rotateModelStartHandler, scene, silverMaterial, testMaterial, _global;

render = null, scene = null, camera = null, manager = null, controls = null, silverMaterial = null, 
testMaterial = null, _global = {
    rotate: !0,
    drift: !0,
    driftMax: .04,
    driftSign: 1,
    driftStep: 3e-5,
    driftSmooth: 6e-5
}, loader = null, initGraphics = function() {
    var a, b, c, d, e, f, g;
    return render = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    }), render.setSize(size.width, size.height), render.setClearColor(15658734), $("#cont").append(render.domElement), 
    camera = new THREE.PerspectiveCamera(70, size.width / size.height, 1, 1e3), camera.position.z = 100, 
    camera.position.y = 80, controls = new THREE.OrbitControls(camera, $("#cont")[0]), 
    e = [ !1, !0 ], controls.noZoom = e[0], controls.noPan = e[1], controls.rotateSpeed = .5, 
    f = [ 38, 18 ], controls.maxDistance = f[0], controls.minDistance = f[1], g = [ 0, Math.PI ], 
    controls.minPolarAngle = g[0], controls.maxPolarAngle = g[1], controls.addEventListener("change", renderf), 
    $("#cont").on("mouseout", function() {
        return controls.stop();
    }), manager = new THREE.LoadingManager(), loader = new THREE.OBJLoader(manager), 
    scene = new THREE.Scene(), a = new THREE.AmbientLight(8947848), scene.add(a), c = new THREE.DirectionalLight(16777215), 
    c.position.set(1, 1, 1).normalize(), scene.add(c), d = 0, createMaterial(), (b = function() {
        var a, c;
        return requestAnimationFrame(b), a = new Date().getTime() - d, d = new Date().getTime(), 
        controls.update(), _global.rotate && (scene.children.last().rotation.y += 5e-4 * a, 
        renderf()), _global.drift ? (c = scene.children.last(), c.rotation.z += _global.driftStep * _global.driftSign * a, 
        c.rotation.z > _global.driftMax && (c.rotation.z = _global.driftMax, _global.driftSign = -1), 
        c.rotation.z < -_global.driftMax && (c.rotation.z = -_global.driftMax, _global.driftSign = 1), 
        renderf()) : void 0;
    })();
}, renderf = function() {
    return render.render(scene, camera);
}, changeMeshMaterial = function(a, b) {
    if (a instanceof THREE.Mesh) {
        if ("gold" === b) return a.material.specular.setHex(11162880), a.material.color.setHex(11162880), 
        a.material.emissive.setHex(11184708);
        if ("whiteGold" === b) return a.material.specular.setHex(16777215), a.material.color.setHex(16710911), 
        a.material.emissive.setHex(11184810);
        if ("silver" === b) return a.material.specular.setHex(16777215), a.material.color.setHex(11184810), 
        a.material.emissive.setHex(5592405);
    }
}, changeMaterialNew = function(a, b) {
    var c, d, e, f;
    for (f = a.children, d = 0, e = f.length; e > d; d++) c = f[d], changeMeshMaterial(c, b), 
    changeMaterialNew(c, b);
    return renderf();
}, createMaterial = function() {
    var a, b;
    return b = [ "im/px.jpg", "im/nx.jpg", "im/py.jpg", "im/ny.jpg", "im/pz.jpg", "im/nz.jpg" ], 
    a = THREE.ImageUtils.loadTextureCube(b), a.format = THREE.RGBFormat, silverMaterial = new THREE.MeshPhongMaterial({
        specular: 16777215,
        color: 11184810,
        emissive: 5592405,
        envMap: a,
        shininess: 100
    }), testMaterial = new THREE.MeshPhongMaterial({
        specular: 16711680,
        color: 16711680,
        emissive: 5592405,
        envMap: a,
        shininess: 100
    });
}, addRotateModelHandlers = function() {
    return removeDriftModelHandlers(), _global.rotate = !0, controls.addEventListener("start", rotateModelStartHandler, !1), 
    controls.addEventListener("end", rotateModelEndHandler, !1);
}, removeRotateModelHandlers = function() {
    return clearTimeout(_global.drifttimeout), clearTimeout(_global.timeout), _global.rotate = !1, 
    controls.removeEventListener("start", rotateModelStartHandler, !1), controls.removeEventListener("end", rotateModelEndHandler, !1);
}, rotateModelStartHandler = function() {
    return clearTimeout(_global.timeout), _global.rotate = !1;
}, rotateModelEndHandler = function() {
    return _global.timeout = setTimeout(function() {
        return _global.drift ? void 0 : _global.rotate = !0;
    }, 4e3);
}, driftModelStartHandler = function() {
    return clearTimeout(_global.drifttimeout), _global.drift = !1, _global.rotate = !1;
}, driftModelEndHandler = function() {
    return _global.drifttimeout = setTimeout(function() {
        return _global.drift = !0, _global.rotate = !1;
    }, 100);
}, removeDriftModelHandlers = function() {
    return clearTimeout(_global.drifttimeout), clearTimeout(_global.timeout), _global.drift = !1, 
    controls.removeEventListener("start", driftModelStartHandler, !1), controls.removeEventListener("end", driftModelEndHandler, !1);
}, addDriftModelHandlers = function() {
    return removeRotateModelHandlers(), _global.drift = !0, _global.rotate = !1, controls.addEventListener("start", driftModelStartHandler, !1), 
    controls.addEventListener("end", driftModelEndHandler, !1);
};

var RawRound;

RawRound = function() {
    var a, b, c, d, e, f, g, h;
    return addRotateModelHandlers(), h = [ 0, Math.PI ], controls.minPolarAngle = h[0], 
    controls.maxPolarAngle = h[1], controls.maxDistance = 38, camera.position.z = 100, 
    camera.position.y = 80, c = new THREE.Object3D(), c.userData.model = !0, null === loadedModels.rawround ? (g = NecklaceText({
        str: "myo",
        font: config.p6.defaultFont,
        rotation: config.p6.size / 2
    }), a = g.textWidth / (config.p1.size / 2), g.userData.text = !0, g.position.z = config.p1.size / 2, 
    c.add(g), f = new THREE.Object3D(), d = new THREE.TorusGeometry(config.p1.size / 2, .5, 20, 50, Math.PI), 
    e = new THREE.Mesh(d, silverMaterial.clone()), e.rotation.z = Math.PI / 2 - 2 * Math.PI / 180, 
    e.rotation.x = Math.PI / 2, e.position.y = 1, e.userData.ring1 = !0, c.add(e), b = e.clone(), 
    b.userData.ring2 = !0, b.rotation.x = Math.PI / 2, b.rotation.z = -Math.PI / 2 - a + 2 * Math.PI / 180, 
    b.position.y = 1, c.add(b), c.scale.x = c.scale.y = c.scale.z = .05 * config.p1.size, 
    c.position.y = 9, scene.add(c), loadedModels.rawround = c.clone(), $("#ajax-loading").hide(), 
    renderf()) : (c = loadedModels.rawround, scene.add(c), changeMaterialNew(c, modelParams.material)), 
    modelParams.changeFont = function(a, b) {
        return b || (b = config.p6.defaultFont), config.p6.defaultFont = b, modelParams.changeText(a);
    }, modelParams.changeText = function(b) {
        var c, d, e, h, i, j, k, l, m, n, o, p, q;
        for (n = scene.children, q = [], h = 0, k = n.length; k > h; h++) if (d = n[h], 
        null != d && d.userData.model === !0) {
            for (e = null, o = d.children, i = 0, l = o.length; l > i; i++) f = o[i], f.userData.ring2 === !0 && (e = f);
            for (p = d.children, j = 0, m = p.length; m > j; j++) g = p[j], null != g && g.userData.text === !0 && d.remove(g);
            c = NecklaceText({
                str: b,
                font: config.p6.defaultFont,
                rotation: config.p1.size / 2
            }), c.userData.text = !0, c.position.z = config.p1.size / 2, c.position.x = -0, 
            a = c.textWidth / (config.p1.size / 2), e.rotation.z = -Math.PI / 2 - a + 2 * Math.PI / 180, 
            d.add(c), q.push(changeMaterialNew(d, modelParams.material));
        }
        return q;
    }, modelParams.changeSize = function(a) {
        var b, c, d, e;
        for (e = scene.children, c = 0, d = e.length; d > c; c++) b = e[c], null != b && b.userData.model === !0 && (b.scale.x = b.scale.y = b.scale.z = .05 * a);
        return renderf();
    }, modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, modelParams.functionsTable["p-panel-text"] = modelParams.changeText, 
    modelParams.functionsTable["p-size"] = modelParams.changeSize;
};

var Cufflink;

Cufflink = function() {
    var a, b;
    return addRotateModelHandlers(), b = [ 0, Math.PI ], controls.minPolarAngle = b[0], 
    controls.maxPolarAngle = b[1], controls.maxDistance = 38, camera.position.z = 200, 
    camera.position.y = 80, a = new THREE.Object3D(), a.userData.model = !0, null === loadedModels.cufflink ? loader.load("obj/ones.obj", function(b) {
        var c, d;
        return b.traverse(function(a) {
            return a instanceof THREE.Mesh ? a.material = silverMaterial.clone() : void 0;
        }), a.add(b), d = NecklaceText({
            str: "RR",
            font: config.p7.defaultFont,
            diagonal: !0,
            leftBorder: 1.1,
            rightBorder: 1.1
        }), c = d.textWidth / (config.p7.size / 2), d.userData.text = !0, d.position.z = 1, 
        d.position.x = -d.textWidth / 2, d.position.y = -5, d.scale.x = d.scale.y = d.scale.z = 2.5, 
        a.add(d), a.scale.x = a.scale.y = a.scale.z = .05 * config.p7.size, scene.add(a), 
        loadedModels.cufflink = a.clone(), $("#ajax-loading").hide(), renderf();
    }) : (a = loadedModels.cufflink, scene.add(a), changeMaterialNew(a, modelParams.material)), 
    modelParams.changeFont = function(a, b) {
        return b || (b = config.p7.defaultFont), config.p7.defaultFont = b, modelParams.changeText(a);
    }, modelParams.changeText = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l;
        for (j = scene.children, l = [], f = 0, h = j.length; h > f; f++) if (d = j[f], 
        null != d && d.userData.model === !0) {
            for (k = d.children, g = 0, i = k.length; i > g; g++) e = k[g], null != e && e.userData.text === !0 && d.remove(e);
            c = NecklaceText({
                str: a,
                font: config.p7.defaultFont,
                diagonal: !0,
                leftBorder: 1.1,
                rightBorder: 1.1
            }), c.userData.text = !0, c.position.z = 1, c.position.x = -c.textWidth / 2, c.position.y = -5, 
            c.scale.x = c.scale.y = c.scale.z = 2.5, b = c.textWidth / (config.p7.size / 2), 
            d.add(c), l.push(changeMaterialNew(d, modelParams.material));
        }
        return l;
    }, modelParams.changeSize = function(a) {
        var b, c, d, e, f;
        for (e = scene.children, f = [], c = 0, d = e.length; d > c; c++) b = e[c], null != b && b.userData.model === !0 && (b.scale.x = b.scale.y = b.scale.z = .05 * a, 
        f.push(renderf()));
        return f;
    }, modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, modelParams.functionsTable["p-panel-text"] = modelParams.changeText, 
    modelParams.functionsTable["p-size"] = modelParams.changeSize;
};

var Testing;

Testing = function() {
    var a, b;
    return _global.rotate = !1, removeRotateModelHandlers(), addDriftModelHandlers(), 
    controls.minPolarAngle = 1.25, controls.maxPolarAngle = 1.4, controls.maxDistance = 50, 
    camera.position.x = 0, camera.position.y = 0, camera.position.z = 0, a = new THREE.Object3D(), 
    a.userData.model = !0, null === loadedModels.testing ? ($("#ajax-loading").show(), 
    b = NecklaceText({
        str: "myo",
        font: config.p4.defaultFont
    }), b.userData.text = !0, b.position.x = -b.textWidth / 2, a.add(b), scene.add(a), 
    loadedModels.testing = a.clone(), $("#ajax-loading").hide(), renderf()) : (a = loadedModels.testing, 
    scene.add(a), changeMaterialNew(a, modelParams.material)), modelParams.changeFont = function(a, b) {
        return b || (b = config.p0.defaultFont), config.p0.defaultFont = b, modelParams.changeText(a);
    }, modelParams.changeText = function(a) {
        var c, d, e, f, g, h, i, j, k;
        for (console.log("xxx: " + a), a.length > 11 ? (camera.position.z = 40, controls.maxDistance = 40) : controls.maxDistance = 30, 
        i = scene.children, k = [], e = 0, g = i.length; g > e; e++) if (d = i[e], null != d && d.userData.model === !0) {
            for (j = d.children, f = 0, h = j.length; h > f; f++) b = j[f], null != b && b.userData.text === !0 && d.remove(b);
            c = NecklaceText({
                str: a,
                font: config.p0.defaultFont
            }), c.userData.text = !0, c.position.x = -c.textWidth / 2, d.add(c), k.push(changeMaterialNew(d, modelParams.material));
        }
        return k;
    }, modelParams.functionsTable["p-selected-font"] = modelParams.changeFont, modelParams.functionsTable["p-panel-text"] = modelParams.changeText;
};

var exportFaces, exportSTL, fromJSON, getPrice, initPanel, loadModel, loadedModels, modelParams, size;

Array.prototype.last = function() {
    return this[this.length - 1];
}, size = {
    width: $("#cont").width(),
    height: $("#cont").height()
}, modelParams = {
    material: "silver",
    functionsTable: {
        "p-model-id": function(a) {
            return console.log(a);
        },
        "p-material": function(a) {
            return modelParams.material = a;
        }
    },
    changeSize: function(a) {
        var b, c, d, e, f, g, h, i;
        for (modelParams.size = a, h = scene.children, d = 0, f = h.length; f > d; d++) if (b = h[d], 
        null != b && b.userData.model === !0) for (i = b.children, e = 0, g = i.length; g > e; e++) c = i[e], 
        c.userData.ring === !0 && (c.scale.x = c.scale.y = c.scale.z = .05 * a);
        return modelParams.price(), renderf();
    }
}, loadedModels = {
    testing: null,
    diamondRing: null,
    mring: null,
    messager: null,
    necklace: null,
    raw: null,
    rawround: null,
    cufflink: null
}, $(document).ready(function() {
    var a;
    return $(window).bind("beforeunload", function(a) {
        return $("canvas").hide(), a.preventDefault();
    }), $(window).on("hashchange", function() {
        var a;
        return a = parseInt(location.hash[1]), loadModel(a);
    }), Detector.webgl ? (a = parseInt(location.hash[1]), initGraphics(), a = isNaN(a) ? 1 : a, 
    loadModel(a)) : $("#no-webgl").show();
}), getPrice = function(a) {
    var b, c;
    a || (a = modelParams.material), b = parseInt(location.hash[1]), c = $("#text-input").val().length, 
    $.ajax({
        type: "POST",
        url: "/ajax/get_model_price.php",
        data: {
            "p-model-id": b,
            "p-material": a,
            "p-text-length": c,
            "p-height": modelParams.heightv,
            "p-text-height": modelParams.fontHeight,
            "p-side-smooth": modelParams.bottomSmooth,
            "p-thickness": modelParams.thickness
        },
        success: function(a) {
            $("#price").text(a), $("input[name=p-price]").val(a);
        }
    });
}, loadModel = function(a) {
    var b, c, d, e, f, g;
    for ($("canvas").hide(), b = config["p" + a], $("#panel").html(""), $("#panel").css("height", b.height), 
    $("#menu a[pid]").parent().removeClass("active-menu"), $("#menu a[pid='p" + a + "']").parent().addClass("active-menu"), 
    g = scene.children, e = 0, f = g.length; f > e; e++) d = g[e], null == d || d.userData.model !== !0 && d.userData.combine !== !0 || "undefined" != typeof scene && null !== scene && scene.remove(d);
    return $("#panel").load("panels/p" + a + ".html", function() {
        return getPrice("silver"), $("form").attr("action", formPost), $("#submit").click(function() {
            return $("form").submit();
        }), $(".gold").click(function() {
            return getPrice("gold"), changeMaterialNew(scene, "gold"), modelParams.material = "gold", 
            $("input[name=p-material]").val(modelParams.material);
        }), $(".whiteGold").click(function() {
            return getPrice("gold"), changeMaterialNew(scene, "whiteGold"), modelParams.material = "whiteGold", 
            $("input[name=p-material]").val(modelParams.material);
        }), $(".silver").click(function() {
            return getPrice("silver"), changeMaterialNew(scene, "silver"), modelParams.material = "silver", 
            $("input[name=p-material]").val(modelParams.material);
        }), $(".silver, .gold, .whiteGold").tooltip({
            position: {
                my: "center top",
                at: "center bottom"
            }
        }), initPanel(), $("canvas").show();
    }), null != b && b.model(), c = null, modelParams.price = function() {
        return function() {
            return $("#price").html(b.price(c).toFixed(2)), $("input[name=p-price]").val(parseInt($("#price").html()));
        };
    }(this), modelParams.functionsTable["p-price"] = modelParams.price;
}, fromJSON = function(a) {
    var b, c, d;
    c = JSON.parse(a), $("input[name=p-material]").val(c["p-material"]), modelParams.functionsTable["p-material"](c["p-material"]);
    for (b in c) d = c[b], "p-model-id" !== b && "p-material" !== b && "p-price" !== b && ($("input[name=" + b + "]").val(d), 
    console.log("" + b + " -> " + d), "p-selected-font" === b ? modelParams.functionsTable["" + b](c["p-panel-text"], d) : "p-ring-diamond" === b ? modelParams.functionsTable["" + b](d, c["p-size-diamond"]) : "p-size-diamond" !== b && modelParams.functionsTable["" + b](d));
    modelParams.price();
}, exportFaces = function(a) {
    var b, c, d, e, f, g;
    for (b = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l;
        for (h = [], b.computeFaceNormals(), g = b.faces, j = b.vertices, i = k = 0, l = g.length; l >= 0 ? l >= k : k >= l; i = l >= 0 ? ++k : --k) f = g[i], 
        null != f && (c = j[f.a], c = new THREE.Vector3(c.x, c.y, c.z), c.applyMatrix4(a.matrix), 
        d = j[f.b], d = new THREE.Vector3(d.x, d.y, d.z), d.applyMatrix4(a.matrix), e = j[f.c], 
        e = new THREE.Vector3(e.x, e.y, e.z), e.applyMatrix4(a.matrix), h.push("facet normal " + f.normal.x.toExponential() + " " + f.normal.y.toExponential() + " " + f.normal.z.toExponential()), 
        h.push("    outer loop"), h.push("        vertex  " + c.x.toExponential() + " " + c.y.toExponential() + " " + c.z.toExponential()), 
        h.push("        vertex  " + d.x.toExponential() + " " + d.y.toExponential() + " " + d.z.toExponential()), 
        h.push("        vertex  " + e.x.toExponential() + " " + e.y.toExponential() + " " + e.z.toExponential()), 
        h.push("    endloop"), h.push("endfacet"));
        return h;
    }, c = [], g = a.children, e = 0, f = g.length; f > e; e++) d = g[e], null != d && null != d.geometry && (c = c.concat(b(d, d.geometry)));
    return 0 === a.children.length && null != a && null != a.geometry && (c = c.concat(b(a, a.geometry))), 
    c;
}, exportSTL = function() {
    var a, b, c, d, e;
    return e = [], e.push("solid name"), c = function() {
        return function(a) {
            var b, d, f, g, h;
            for (g = a.children, h = [], d = 0, f = g.length; f > d; d++) b = g[d], null == b.userData.second && null == b.userData.first && (e = e.concat(exportFaces(b, a.matrix)), 
            h.push(c(b)));
            return h;
        };
    }(this), b = function() {
        return function(a) {
            var d, e, f, g;
            for (f = a.children, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(a.userData.model === !0 ? c(a) : a.userData.combine === !0 ? b(a) : void 0);
            return g;
        };
    }(this), b(scene), e.push("endsolid name"), d = e.join("\n"), console.log(d), a = new Blob([ d ], {
        type: "text/plaincharset=utf-8"
    }), saveAs(a, "model.stl");
}, function(a) {
    a.fn.extend({
        donetyping: function(b, c) {
            var d, e;
            return c = c || 1e3, e = void 0, d = function(a) {
                e && (e = null, b.call(a));
            }, this.each(function(b, f) {
                var g;
                g = a(f), g.is(":input") && g.on("input", function() {
                    e && clearTimeout(e), e = setTimeout(function() {
                        d(f);
                    }, c);
                }).blur(function() {
                    d(f);
                });
            });
        }
    });
}(jQuery), initPanel = function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
    for ($("#size a.plus").click(function() {
        var a;
        return a = parseFloat($("#p-size-display").val()), 25 > a ? ($("#p-size-display").val("" + (a + .1).toFixed(2).toString() + " мм"), 
        $("input[name=p-size]").val(a + .1), modelParams.changeSize(a + .1), config.p1.size = a + 1) : void 0;
    }), $("#size a.minus").click(function() {
        var a;
        return a = parseFloat($("#p-size-display").val()), a > 10 ? ($("#p-size-display").val("" + (a - .1).toFixed(2).toString() + " мм"), 
        $("input[name=p-size]").val(a - .1), modelParams.changeSize(a - .1), config.p1.size = a - 1) : void 0;
    }), $("#p-size-display").on("change", function() {
        var a;
        return a = parseFloat($("#p-size-display").val()), Number.isNaN(a) ? $("#p-size-display").val("18 мм") : a >= 10 && 25 >= a ? $("#p-size-display").val("" + a.toFixed(2).toString() + " мм") : 10 >= a ? $("#p-size-display").val("10 мм") : a >= 25 && $("#p-size-display").val("25 мм"), 
        modelParams.changeSize(parseFloat($("#p-size-display").val())), $("input[name=p-size]").val(parseFloat($("#p-size-display").val()));
    }), $("input[name=p-size]").val(config.p1.size), $("#p-size-display").val("" + config.p1.size + " мм"), 
    $("#slider").slider({
        range: "min",
        value: config.p1.sizeDiamond,
        min: 9.6,
        max: 13,
        step: .1,
        slide: function(a, b) {
            var c;
            return c = parseFloat(b.value), $("#amount").html("" + c.toFixed(2) + " мм"), $("input[name=p-size-diamond]").val(c), 
            modelParams.changeSizeDiamond(c);
        }
    }), $("#amount").html(parseFloat($("#slider").slider("value")).toFixed(2) + " мм"), 
    $("input[name=p-size-diamond]").val(config.p1.sizeDiamond), $("a.yearstyle").click(function() {
        var a;
        return $(".yearstyle").removeClass("current"), $(this).addClass("current"), modelParams.sizeDiamond = parseFloat($("#amount").html()), 
        a = parseInt($(this).attr("data-obj")), $("input[name=p-ring-diamond]").val(a), 
        modelParams.changeDiamondModel(a);
    }), $(".ring_select").click(function() {
        var a;
        return modelParams.size = parseFloat($("#p-size-display").val()), a = parseInt($(this).attr("data-obj")), 
        modelParams.changeRingModel(a), $("input[name=p-ring]").val(a);
    }), $("#height-ring").slider({
        range: "min",
        value: config.p2.ringHeight,
        min: 1.5,
        max: 4,
        step: .1,
        slide: function(a, b) {
            var c;
            c = parseFloat(b.value), $("#height-ring-display").html(c.toFixed(2) + " мм"), modelParams.changeHeight(c), 
            $("input[name=p-height]").val(c), getPrice();
        }
    }), $("#height-ring-display").html(config.p2.ringHeight.toFixed(2) + " мм"), $("input[name=p-height]").val(config.p2.ringHeight), 
    $("#thickness-ring").slider({
        range: "min",
        value: config.p2.ringThickness,
        min: 1.5,
        max: 2.5,
        step: .1,
        slide: function(a, b) {
            var c;
            c = parseFloat(b.value), $("#thickness-ring-display").html(c.toFixed(2) + " мм"), 
            modelParams.changeThickness(c), getPrice();
        }
    }), $("#thickness-ring-display").html(config.p2.ringThickness.toFixed(2) + " мм"), 
    $("input[name=p-thickness]").val(config.p2.ringThickness), $("#height-text").slider({
        range: "min",
        value: config.p2.fontHeight,
        min: 3,
        max: 6,
        step: .1,
        slide: function(a, b) {
            var c;
            c = parseFloat(b.value), $("#height-text-display").html(c.toFixed(2) + " мм"), modelParams.changeFontHeight(c), 
            $("input[name=p-text-height]").val(c), getPrice();
        }
    }), $("#height-text-display").html(config.p2.fontHeight.toFixed(2) + " мм"), $("input[name=p-text-height]").val(config.p2.fontHeight), 
    $("#side-smooth").slider({
        range: "min",
        value: config.p2.sideSmooth,
        min: 0,
        max: 1,
        step: .1,
        slide: function(a, b) {
            var c;
            c = parseFloat(b.value), $("#side-smooth-display").html(c.toFixed(2) + " мм"), modelParams.changeSideSmooth(c), 
            $("input[name=p-side-smooth]").val(c), getPrice();
        }
    }), $("#side-smooth-display").html(config.p2.sideSmooth.toFixed(2) + " мм"), $("input[name=p-side-smooth]").val(config.p2.sideSmooth), 
    $("#font-select-list_SelectBoxItArrowContainer").click(function(a) {
        $("#font-select-list_SelectBoxItOptions").toggle(), a.stopPropagation();
    }), $("#symbol-select-list_SelectBoxItArrowContainer").click(function(a) {
        $("#symbol-select-list_SelectBoxItOptions").toggle(), a.stopPropagation();
    }), i = [ {
        name: "Знаки зодиака",
        data: [ "", "", "", "", "", "", "", "", "", "", "", "" ]
    }, {
        name: "Символы",
        data: [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ]
    }, {
        name: "Цифры",
        data: [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ]
    } ], b = $("#symbol-select-list_SelectBoxItOptions").get(0), e = k = 0, m = i.length; m > k; e = ++k) for (d = i[e], 
    j = $('<div class="symbol-group-name">' + d.name + '</div><ul class="symbol-button-trigger-wrapper" id="group_' + e + '"></ul>'), 
    $(b).append(j), o = d.data, f = l = 0, n = o.length; n > l; f = ++l) c = o[f], g = $('<li class="symbol-button-trigger"></li>'), 
    $(b).find("ul#group_" + e).append(g), a = $('<button id="' + d.data[f] + '" type="button">' + d.data[f] + "</button>"), 
    $(g).append(a), $(a).click(function(a) {
        return $("#text-input").val($("#text-input").val() + a.target.getAttribute("id")), 
        textMaxLength();
    });
    return $(":not(#font-select-list_SelectBoxItArrowContainer)").click(function(a) {
        $(a.target).is("#font-select-list_SelectBoxItOptions") || $("#font-select-list_SelectBoxItOptions").hide();
    }), $(":not(#symbol-select-list_SelectBoxItArrowContainer)").click(function(a) {
        $(a.target).is("#symbol-select-list_SelectBoxItOptions") || $("#symbol-select-list_SelectBoxItOptions").hide();
    }), $(".selectboxit-option").click(function() {
        var a;
        $(".selectboxit-focus").removeClass("selectboxit-focus"), $(this).addClass("selectboxit-focus"), 
        a = $(this).attr("data-val"), modelParams.changeFont($("#text-input").val(), a.trim()), 
        $("input[name=p-selected-font]").val(a.trim());
    }), $("input[name=p-selected-font]").val(config.p3.defaultFont), "undefined" != typeof textMaxLength && null !== textMaxLength && $("#text-input").bind("input", textMaxLength), 
    h = function(a, b, c) {
        var d, e, f, g;
        d = function(a) {
            var b, c;
            return b = 0, document.selection ? (a.focus(), c = document.selection.createRange(), 
            c.moveStart("character", -a.value.length), b = c.text.length) : (a.selectionStart || "0" === a.selectionStart) && (b = a.selectionStart), 
            b;
        }, g = a.selectionStart, e = a.selectionEnd, g === e && (a.setSelectionRange ? (a.focus(), 
        a.setSelectionRange(b, c)) : a.createTextRange && (f = a.createTextRange(), f.collapse(!0), 
        f.moveEnd("character", c), f.moveStart("character", b), f.select()));
    }, $("#text-input").bind("keydown", function() {
        return h($(this)[0], $(this).val().length, $(this).val().length);
    }), $("#text-input").bind("keyup", function() {
        return getPrice();
    }), modelParams.price();
};