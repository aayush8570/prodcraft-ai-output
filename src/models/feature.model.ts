export interface FeatureConfig {
  id: string;
  name: string;
  enabled: boolean;
  metadata: Record<string, unknown>;
}