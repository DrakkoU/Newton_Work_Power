document.addEventListener('DOMContentLoaded', function() {

    // 5. Average Velocity Calculation (v_avg = d/t)
    document.getElementById('calc-velocity').addEventListener('click', function() {
        const distance = parseFloat(document.getElementById('distance-vel').value);
        const time = parseFloat(document.getElementById('time-vel').value);
        
        if (isNaN(distance) || isNaN(time) || time <= 0) {
            alert("Please enter valid values (time must be positive)");
            return;
        }
        
        const velocity = distance / time;
        
        document.getElementById('velocity-result').innerHTML = `
            <p><span class="formula">v_avg = distance / time</span></p>
            <p>v_avg = ${distance} m / ${time} s</p>
            <p>Result: <span class="value">${velocity.toFixed(2)} m/s</span></p>
            <p>That's about <span class="value">${(velocity * 3.6).toFixed(2)} km/h</span></p>
            
            ${velocity > 10 ? '<p class="context">🚀 Fast! (Olympic sprinter speed)</p>' : 
            velocity > 5 ? '<p class="context">🏃 Moderate (Jogging speed)</p>' : 
            velocity > 2 ? '<p class="context">🚶 Typical walking speed</p>' : 
            '<p class="context">🐢 Very slow movement</p>'}
        `;
    });

    // 1. Force Calculation (F = ma)
    document.getElementById('calc-force').addEventListener('click', function() {
        const mass = parseFloat(document.getElementById('mass').value);
        const acceleration = parseFloat(document.getElementById('acceleration').value);
        
        if (isNaN(mass) || isNaN(acceleration)) {
            alert("Please enter valid numbers for mass and acceleration");
            return;
        }
        
        const force = mass * acceleration;
        document.getElementById('force-result').innerHTML = `
            <p><span class="formula">F = m × a</span></p>
            <p>F = ${mass} kg × ${acceleration} m/s²</p>
            <p>Result: <span class="value">${force.toFixed(2)} N</span> (Newtons)</p>
        `;
    });
    
    // 2. Work Calculation (W = Fdcosθ)
    document.getElementById('calc-work').addEventListener('click', function() {
        const force = parseFloat(document.getElementById('force').value);
        const distance = parseFloat(document.getElementById('distance').value);
        const angle = parseFloat(document.getElementById('angle').value);
        
        if (isNaN(force) || isNaN(distance) || isNaN(angle)) {
            alert("Please enter valid numbers for all fields");
            return;
        }
        
        const angleRad = angle * (Math.PI / 180);
        const work = force * distance * Math.cos(angleRad);
        document.getElementById('work-result').innerHTML = `
            <p><span class="formula">W = F × d × cos(θ)</span></p>
            <p>W = ${force} N × ${distance} m × cos(${angle}°)</p>
            <p>Result: <span class="value">${work.toFixed(2)} J</span> (Joules)</p>
        `;
    });
    
    // 3. Power Calculation (P = W/t)
    document.getElementById('calc-power').addEventListener('click', function() {
        const work = parseFloat(document.getElementById('work').value);
        const time = parseFloat(document.getElementById('time').value);
        
        if (isNaN(work) || isNaN(time) || time <= 0) {
            alert("Please enter valid numbers (time must be positive)");
            return;
        }
        
        const power = work / time;
        document.getElementById('power-result').innerHTML = `
            <p><span class="formula">P = W / t</span></p>
            <p>P = ${work} J / ${time} s</p>
            <p>Result: <span class="value">${power.toFixed(2)} W</span> (Watts)</p>
        `;
    });
    
    // 4. Acceleration Calculation (a = Δv/Δt) - NEW
    document.getElementById('calc-acceleration').addEventListener('click', function() {
        const v0 = parseFloat(document.getElementById('initial-vel').value);
        const vf = parseFloat(document.getElementById('final-vel').value);
        const t = parseFloat(document.getElementById('time-interval').value);
        
        if (isNaN(v0) || isNaN(vf) || isNaN(t) || t <= 0) {
            alert("Please enter valid values (time must be positive)");
            return;
        }
        
        const acceleration = (vf - v0) / t;
        document.getElementById('acceleration-result').innerHTML = `
            <p><span class="formula">a = (v_f - v_i) / t</span></p>
            <p>a = (${vf} - ${v0}) / ${t}</p>
            <p>Result: <span class="value">${acceleration.toFixed(2)} m/s²</span></p>
            ${acceleration > 0 ? '(<span style="color:#27ae60">accelerating</span>)' : 
            acceleration < 0 ? '(<span style="color:#e74c3c">decelerating</span>)' : 
            '(<span style="color:#3498db">constant velocity</span>)'}
        `;
    });
});