@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html'
})
export class FeatureListComponent implements OnInit {
  features$ = this.featureSvc.getAll();

  constructor(private featureSvc: FeatureService) {}

  ngOnInit(): void {}
}