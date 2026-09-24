import { Container } from './Container';

export function NotificationBar() {
  return (
    <div className="bg-foreground text-background">
      <Container className="py-3 text-center">
        <p className="text-sm font-medium tracking-wide sm:text-base">
          Açılışa Özel %20 İndirim!
        </p>
      </Container>
    </div>
  );
}
