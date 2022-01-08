import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.css']
})
export class ServicesMainComponent implements OnInit {
serviceData : any = [
  {
    heading:"CONSULTING & IMPLEMNTATION",
    content:`Work with the largest pool of Information Management consultants, offering more than 3000 experts worldwide that provide a flexible engagement model to combine the right skilled resources for the project, in-region or remotely.`,
    thumbnail:"https://www.applexus.com/sites/default/files/images/Home/Business-Transformation.png",
    borderColor:"#e3746f"
  },
  {
    heading:"TRAINING AND EDUCATION",
    content:`Gain a competitive edge for you or your team and take your SAP® expertise to the next level with SAP® certification. As an authorised SAP® education partner, we offer certificate training by area of focus and skill level. Learn safe in the knowledge that your SAP® training and certification is delivered through an approved partner`,
    thumbnail:"https://www.applexus.com/sites/default/files/images/Home/Business-Transformation.png"
  },
  {
    heading:"PROGRAM MANAGEMENT",
    content:`No fake products and services. The customer is king, their lives and needs are the inspiration. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
    thumbnail:"https://www.applexus.com/sites/default/files/images/Home/Business-Transformation.png"
  },
  {
    heading:"SAP BASIS",
    content:`The main mission of the company is “Helping companies leverage investments in SAP solutions.” We use our unique cross-industry experience as well as a deep knowledge and understanding of SAP business and technology solutions to achieve this task.`,
    thumbnail:"https://www.applexus.com/sites/default/files/images/Home/Business-Transformation.png"
  },
  {
    heading:"SECURITY AND PERFORMANCE TUNINGS",
    content:`The main mission of the company is “Helping companies leverage investments in SAP solutions.” We use our unique cross-industry experience as well as a deep knowledge and understanding of SAP business and technology solutions to achieve this task.`,
    thumbnail:"https://www.applexus.com/sites/default/files/images/Home/Business-Transformation.png"
  }
  
]
  constructor() { }

  ngOnInit(): void {
    this.getColor();
  }
  randomItem:any;
  colors=['#e3746f','#549d9f','#f5a623','#8d549f','#c03381'];
  getColor(){
    this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
    console.log('s',this.randomItem);
    return this.randomItem;
 }
}
