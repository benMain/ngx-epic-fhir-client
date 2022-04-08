import { OAuthService } from './api';
import { EpicOAuthToken } from './model';

export function appInitializerFactory(
  service: OAuthService
): () => Promise<EpicOAuthToken> {
  return () => service.checkRunAuthWorkflow();
}
