import {Object3D,Box3,Vector3} from "three";
import CameraControls from "camera-controls";

export function focusObject(object:Object3D,controls:CameraControls,enableTransition: boolean = true){
    const box3 = new Box3();
    box3.setFromObject(object);

    if(box3.isEmpty()){
        box3.set(new Vector3(object.position.x-1, object.position.y-1, object.position.z-1), new Vector3(object.position.x+1, object.position.y+1, object.position.z+1));
    }
    return controls.fitToBox(box3,enableTransition);
}