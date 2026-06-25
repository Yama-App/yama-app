import { AppSupportLayout } from '@/app/components/app_support_layout';

export default function TeameyContactPage() {
  return (
    <AppSupportLayout
      app="teamey"
      title="Teamey"
      termsUrl="/apps/teamey/terms"
      privacyUrl="/apps/teamey/privacy"
      email="chameleonjapanapp@gmail.com"
    />
  );
}
