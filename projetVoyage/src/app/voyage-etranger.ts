export class VoyageEtranger {
    constructor(
        public id?:string,
        public libelle?: String ,
        public dateAlle?:Date,
        public description?:String,
        public nbJours?:number,
        public prix?:number,
        public photo?:String ,
        public promo?: boolean ,
        public reservation ?:string[]){}


}

