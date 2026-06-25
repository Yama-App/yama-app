import { AppSupportLayout } from '@/app/components/app_support_layout';

export default function DuelyContactPage() {
  return (
    <AppSupportLayout
      app="duely"
      title="Duely"
      termsUrl="/apps/duely/terms"
      privacyUrl="/apps/duely/privacy"
      email="chameleonjapanapp@gmail.com"
    />
  );
}
