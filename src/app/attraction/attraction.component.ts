import { Attraction } from './../models/attraction.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  constructor() { }

  public attractions: Attraction[] = [];
  public attraction: Attraction;


  ngOnInit() {
    this.attractions.push(new Attraction({
      Title: "school of art",
      Text: "We are more than just an art school! As one of the pioneers in the art fraternity in Malaysia, School of The Arts is one of the most dynamic school at USM with year-round concerts and performances, art exhibitions and events organised by lecturers and students. As part of the university’s vision, School of The Arts is determined to transform higher education for a sustainable tomorrow through the Arts. We strive to provide an unparallel arts and academic education for our undergraduate and postgraduate students in a creative, challenging, and nurturing environment, to ensure that our students are passionate about the arts as we prepare them to reach their fullest potential. With a strong backing in both performance and research our faculty members carry with them years of academic experience and industry knowledge that is crucial in advancing the vision of the university. We are dedicated to advancing human creativity in an increasingly complex and technology-driven world.",
      Img: "assets/img/attraction/piazza.jpg"
    }))
    this.attractions.push(new Attraction({
      Title: "Sollat",
      Text: "The School of Languages, Literacies and Translation was established in 1972 as a Language Unit under the School of Education. The Language Unit provided the facilities for language learning for the campus community. Bahasa Malaysia and English were the main language courses offered and Thai, Korean, Vietnamese and Tagalog were offered as foreign language courses. Since then, Bahasa Malaysia has been a compulsory course for all undergraduate students while foreign languages have been listed as elective courses. In 1985, the Language Unit was upgraded to the Centre for Languages and Translation (CLT). At that time, Bahasa Malaysia was made the medium of instruction for teaching and learning and English became compulsory for all undergraduates. As a result, CLT took on a more prominent and significant role.",
      Img: "assets/img/attraction/cathedral.jpg"
    }))
    console.log(this.attractions);
    this.attraction = new Attraction();
    this.active(this.attractions[0])

  }

  active(attraction: Attraction) {
    this.attraction.Title = attraction.Title;
    this.attraction.Text = attraction.Text;
  }

}