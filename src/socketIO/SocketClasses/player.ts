import Vector2 from "./vector2"

export default  class Player {
    id : string
    username : string
    instanceCount : number
    position : Vector2
    connectedToUnity : boolean
    constructor(_username : string, _id : string){
        this.id = _id
        this.username = _username
        this.instanceCount = 1
        this.position = new Vector2()
        this.connectedToUnity = false
    }

}

