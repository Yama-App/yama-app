import { AppSupportLayout } from '@/app/components/app_support_layout';

export default function SheetMakerContactPage() {
  return (
    <AppSupportLayout
      app="sheetmaker"
      title="Sheetmaker"
      termsUrl="/apps/sheetmaker/terms"
      privacyUrl="/apps/sheetmaker/privacy"
      email="chameleonjapanapp@gmail.com"
    />
  );
}
