var multiplexer16 = require('./multiplexer16-def.js'),
    not16 = require('./not16-def.js'),
    and16 = require('./and16-def.js'),
    add16 = require('./add16-def.js'),
    or16way = require('./or16way-def.js'),
    not = require('./not-def.js'),
    or16 = require('./or16-def.js');

module.exports = {
    alu: function(
        x1,
        x2,
        x3,
        x4,
        x5,
        x6,
        x7,
        x8,
        x9,
        x10,
        x11,
        x12,
        x13,
        x14,
        x15,
        x16,
        y1,
        y2,
        y3,
        y4,
        y5,
        y6,
        y7,
        y8,
        y9,
        y10,
        y11,
        y12,
        y13,
        y14,
        y15,
        y16,
        zx,
        nx,
        zy,
        ny,
        f,
        no
    ){
        
        // Mux16(a=x,b[0..15]=false,sel=zx,out=zdx); //Zero the x
        var zdx = multiplexer16.multiplexer16(
                x1,
                x2,
                x3,
                x4,
                x5,
                x6,
                x7,
                x8,
                x9,
                x10,
                x11,
                x12,
                x13,
                x14,
                x15,
                x16,
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                zx
            );
        
        // Not16(in=zdx,out=notx);                  //Not the x
        var notx = not16.not16(
                zdx.r1,
                zdx.r2,
                zdx.r3,
                zdx.r4,
                zdx.r5,
                zdx.r6,
                zdx.r7,
                zdx.r8,
                zdx.r9,
                zdx.r10,
                zdx.r11,
                zdx.r12,
                zdx.r13,
                zdx.r14,
                zdx.r15,
                zdx.r16
            );
        
        // Mux16(a=zdx,b=notx,sel=nx,out=ndx);      //chose x or notx
        var ndx = multiplexer16.multiplexer16(
                zdx.r1,
                zdx.r2,
                zdx.r3,
                zdx.r4,
                zdx.r5,
                zdx.r6,
                zdx.r7,
                zdx.r8,
                zdx.r9,
                zdx.r10,
                zdx.r11,
                zdx.r12,
                zdx.r13,
                zdx.r14,
                zdx.r15,
                zdx.r16,
                notx.r1,
                notx.r2,
                notx.r3,
                notx.r4,
                notx.r5,
                notx.r6,
                notx.r7,
                notx.r8,
                notx.r9,
                notx.r10,
                notx.r11,
                notx.r12,
                notx.r13,
                notx.r14,
                notx.r15,
                notx.r16,
                nx
            );
        
        // // ditto for y
        // Mux16(a=y,b[0..15]=false,sel=zy,out=zdy);
        var zdy = multiplexer16.multiplexer16(
                y1,
                y2,
                y3,
                y4,
                y5,
                y6,
                y7,
                y8,
                y9,
                y10,
                y11,
                y12,
                y13,
                y14,
                y15,
                y16,
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                zy
            );
        
        // Not16(in=zdy,out=noty);
        var noty = not16.not16(
                zdy.r1,
                zdy.r2,
                zdy.r3,
                zdy.r4,
                zdy.r5,
                zdy.r6,
                zdy.r7,
                zdy.r8,
                zdy.r9,
                zdy.r10,
                zdy.r11,
                zdy.r12,
                zdy.r13,
                zdy.r14,
                zdy.r15,
                zdy.r16
            );
        
        // Mux16(a=zdy,b=noty,sel=ny,out=ndy);
        var ndy = multiplexer16.multiplexer16(
                zdy.r1,
                zdy.r2,
                zdy.r3,
                zdy.r4,
                zdy.r5,
                zdy.r6,
                zdy.r7,
                zdy.r8,
                zdy.r9,
                zdy.r10,
                zdy.r11,
                zdy.r12,
                zdy.r13,
                zdy.r14,
                zdy.r15,
                zdy.r16,
                noty.r1,
                noty.r2,
                noty.r3,
                noty.r4,
                noty.r5,
                noty.r6,
                noty.r7,
                noty.r8,
                noty.r9,
                noty.r10,
                noty.r11,
                noty.r12,
                noty.r13,
                noty.r14,
                noty.r15,
                noty.r16,
                ny
            );
        
        // Add16(a=ndx,b=ndy,out=xplusy); //x+y
        var xplusy = add16.add16(
                ndx.r1,
                ndx.r2,
                ndx.r3,
                ndx.r4,
                ndx.r5,
                ndx.r6,
                ndx.r7,
                ndx.r8,
                ndx.r9,
                ndx.r10,
                ndx.r11,
                ndx.r12,
                ndx.r13,
                ndx.r14,
                ndx.r15,
                ndx.r16,
                ndy.r1,
                ndy.r2,
                ndy.r3,
                ndy.r4,
                ndy.r5,
                ndy.r6,
                ndy.r7,
                ndy.r8,
                ndy.r9,
                ndy.r10,
                ndy.r11,
                ndy.r12,
                ndy.r13,
                ndy.r14,
                ndy.r15,
                ndy.r16
            );
        
        // And16(a=ndx,b=ndy,out=xandy);  //x&y
        var xandy = and16.and16(
                ndx.r1,
                ndx.r2,
                ndx.r3,
                ndx.r4,
                ndx.r5,
                ndx.r6,
                ndx.r7,
                ndx.r8,
                ndx.r9,
                ndx.r10,
                ndx.r11,
                ndx.r12,
                ndx.r13,
                ndx.r14,
                ndx.r15,
                ndx.r16,
                ndy.r1,
                ndy.r2,
                ndy.r3,
                ndy.r4,
                ndy.r5,
                ndy.r6,
                ndy.r7,
                ndy.r8,
                ndy.r9,
                ndy.r10,
                ndy.r11,
                ndy.r12,
                ndy.r13,
                ndy.r14,
                ndy.r15,
                ndy.r16
            );
        
        
        // Mux16(a=xandy,b=xplusy,sel=f,out=fxy);  //chose function
        var fxy = multiplexer16.multiplexer16(
                xandy.r1,
                xandy.r2,
                xandy.r3,
                xandy.r4,
                xandy.r5,
                xandy.r6,
                xandy.r7,
                xandy.r8,
                xandy.r9,
                xandy.r10,
                xandy.r11,
                xandy.r12,
                xandy.r13,
                xandy.r14,
                xandy.r15,
                xandy.r16,
                xplusy.r1,
                xplusy.r2,
                xplusy.r3,
                xplusy.r4,
                xplusy.r5,
                xplusy.r6,
                xplusy.r7,
                xplusy.r8,
                xplusy.r9,
                xplusy.r10,
                xplusy.r11,
                xplusy.r12,
                xplusy.r13,
                xplusy.r14,
                xplusy.r15,
                xplusy.r16,
                f
            );
        
        // Not16(in=fxy,out=nfxy);      //not the output or not
        var nfxy = not16.not16(
                fxy.r1,
                fxy.r2,
                fxy.r3,
                fxy.r4,
                fxy.r5,
                fxy.r6,
                fxy.r7,
                fxy.r8,
                fxy.r9,
                fxy.r10,
                fxy.r11,
                fxy.r12,
                fxy.r13,
                fxy.r14,
                fxy.r15,
                fxy.r16
            );
        
        
        // Mux16(a=fxy,b=nfxy,sel=no,out=oo);  //chose which
        var oo = multiplexer16.multiplexer16(
                fxy.r1,
                fxy.r2,
                fxy.r3,
                fxy.r4,
                fxy.r5,
                fxy.r6,
                fxy.r7,
                fxy.r8,
                fxy.r9,
                fxy.r10,
                fxy.r11,
                fxy.r12,
                fxy.r13,
                fxy.r14,
                fxy.r15,
                fxy.r16,
                nfxy.r1,
                nfxy.r2,
                nfxy.r3,
                nfxy.r4,
                nfxy.r5,
                nfxy.r6,
                nfxy.r7,
                nfxy.r8,
                nfxy.r9,
                nfxy.r10,
                nfxy.r11,
                nfxy.r12,
                nfxy.r13,
                nfxy.r14,
                nfxy.r15,
                nfxy.r16,
                no
            );        
        
        // Or16Way(in=oo,out=o);  //for zr
        var o = or16way.or16way(
                oo.r1,
                oo.r2,
                oo.r3,
                oo.r4,
                oo.r5,
                oo.r6,
                oo.r7,
                oo.r8,
                oo.r9,
                oo.r10,
                oo.r11,
                oo.r12,
                oo.r13,
                oo.r14,
                oo.r15,
                oo.r16
            );
        
        
        // Not(in=o,out=zr);
        var zr = not.not(o.toString());
               
        // And16(a[0..15]=true,b=oo,out[15]=ng,out[0..14]=drop); //ng
        var res1 = and16.and16(
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                "true",
                oo.r1,
                oo.r2,
                oo.r3,
                oo.r4,
                oo.r5,
                oo.r6,
                oo.r7,
                oo.r8,
                oo.r9,
                oo.r10,
                oo.r11,
                oo.r12,
                oo.r13,
                oo.r14,
                oo.r15,
                oo.r16
            );
        
        var ng = (res1.r16).toString();
        
        // Or16(a=oo,b[0..15]=false,out=out); //oo=output
        var out = or16.or16(
                oo.r1,
                oo.r2,
                oo.r3,
                oo.r4,
                oo.r5,
                oo.r6,
                oo.r7,
                oo.r8,
                oo.r9,
                oo.r10,
                oo.r11,
                oo.r12,
                oo.r13,
                oo.r14,
                oo.r15,
                oo.r16,
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "false"
            );
            
        
        
        
        return {
            r1: out.r1,
            r2: out.r2,
            r3: out.r3,
            r4: out.r4,
            r5: out.r5,
            r6: out.r6,
            r7: out.r7,
            r8: out.r8,
            r9: out.r9,
            r10: out.r10,
            r11: out.r11,
            r12: out.r12,
            r13: out.r13,
            r14: out.r14,
            r15: out.r15,
            r16: out.r16,
            zr: zr.toString(),
            ng: ng
        };
    }
};

// CHIP ALU {
//     IN  
//         x[16], y[16],  // 16-bit inputs        
//         zx, // zero the x input?
//         nx, // negate the x input?
//         zy, // zero the y input?
//         ny, // negate the y input?
//         f,  // compute  out = x + y (if 1) or out = x & y (if 0)
//         no; // negate the out output?

//     OUT 
//         out[16], // 16-bit output
//         zr, // 1 if (out==0), 0 otherwise
//         ng; // 1 if (out<0),  0 otherwise

//     PARTS:

// Mux16(a=x,b[0..15]=false,sel=zx,out=zdx); //Zero the x
// Not16(in=zdx,out=notx);                  //Not the x
// Mux16(a=zdx,b=notx,sel=nx,out=ndx);      //chose x or notx
// // ditto for y
// Mux16(a=y,b[0..15]=false,sel=zy,out=zdy);
// Not16(in=zdy,out=noty);
// Mux16(a=zdy,b=noty,sel=ny,out=ndy);

// Add16(a=ndx,b=ndy,out=xplusy); //x+y
// And16(a=ndx,b=ndy,out=xandy);  //x&y
// Mux16(a=xandy,b=xplusy,sel=f,out=fxy);  //chose function

// Not16(in=fxy,out=nfxy);      //not the output or not
// Mux16(a=fxy,b=nfxy,sel=no,out=oo);  //chose which


// Or16Way(in=oo,out=o);  //for zr
// Not(in=o,out=zr);

// And16(a[0..15]=true,b=oo,out[15]=ng,out[0..14]=drop); //ng

// Or16(a=oo,b[0..15]=false,out=out); //oo=output
// }

