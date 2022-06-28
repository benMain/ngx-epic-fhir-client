import { OAuthService } from './services';

export function appInitializerFactory(service: OAuthService): () => void {
  return () => service.checkRunAuthWorkflow();
}
