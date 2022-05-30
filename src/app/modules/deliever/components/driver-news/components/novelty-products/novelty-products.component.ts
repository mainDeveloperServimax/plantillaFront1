import { Component, OnInit } from "@angular/core";
import { LABELS } from "../../../../../../constants/labels.constans";


@Component({
  selector: 'app-novelty-products',
  templateUrl: './novelty-products.component.html',
  styleUrls: ['./novelty-products.component.scss']
})
export class NoveltyProductsComponent implements OnInit {
  public LABELS = LABELS;

  constructor(
  ) { }

  ngOnInit(): void {

  }

}

