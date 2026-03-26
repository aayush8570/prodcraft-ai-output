@Injectable({ providedIn: 'root' })
export class FeatureService {
  private readonly apiUrl = `${environment.apiBaseUrl}/features`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<FeatureConfig[]> {
    return this.http.get<FeatureConfig[]>(this.apiUrl);
  }

  create(config: Partial<FeatureConfig>): Observable<FeatureConfig> {
    return this.http.post<FeatureConfig>(this.apiUrl, config);
  }
}