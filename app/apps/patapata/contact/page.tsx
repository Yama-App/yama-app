import { AppSupportLayout } from '@/app/components/app_support_layout';

export default function PatapataContactPage() {
  return (
    <AppSupportLayout
      app="patapata"
      title="Patapata"
      termsUrl="/apps/patapata/terms"
      privacyUrl="/apps/patapata/privacy"
      email="chameleonjapanapp@gmail.com"
    />
  );
}
