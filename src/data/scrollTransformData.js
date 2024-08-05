// Scroll Transform Data

function ScrollTransformData(phase_0_transform, phase_1_transform, phase_2_transform, phase_3_transform){
    this.phase_0_transform = phase_0_transform;
    this.phase_1_transform = phase_1_transform;
    this.phase_2_transform = phase_2_transform;
    this.phase_3_transform = phase_3_transform;
}

ScrollTransformData.prototype.printPhase0 = function(){
    console.log(`Phase 0 Transform: ${this.phase_0_transform}`);
}

ScrollTransformData.prototype.printPhase1 = function(){
    console.log(`Phase 1 Transform: ${this.phase_1_transform}`);
}

ScrollTransformData.prototype.printPhase2 = function(){
    console.log(`Phase 2 Transform: ${this.phase_2_transform}`);
}

ScrollTransformData.prototype.printPhase3 = function(){
    console.log(`Phase 3 Transform: ${this.phase_3_transform}`);
}

export default ScrollTransformData