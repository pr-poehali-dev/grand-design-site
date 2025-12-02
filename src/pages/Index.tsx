import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const services = [
    { id: 1, name: 'Световые короба', icon: 'Box', color: 'bg-[#FFD700]' },
    { id: 2, name: 'Широкоформатная печать', icon: 'Printer', color: 'bg-[#E91E63]' },
    { id: 3, name: 'Световые вывески', icon: 'Lightbulb', color: 'bg-[#00BCD4]' },
    { id: 4, name: 'Офсетная печать', icon: 'FileText', color: 'bg-[#FFD700]' },
    { id: 5, name: 'Цифровая печать', icon: 'Monitor', color: 'bg-[#E91E63]' },
    { id: 6, name: 'Разработка логотипов', icon: 'Palette', color: 'bg-[#00BCD4]' },
    { id: 7, name: 'Флексографическая печать', icon: 'Stamp', color: 'bg-[#FFD700]' },
  ];

  const portfolioItems = [
    { id: 1, title: 'Вывеска для магазина', category: 'Световые вывески' },
    { id: 2, title: 'Брендинг кафе', category: 'Разработка логотипов' },
    { id: 3, title: 'Наружная реклама', category: 'Широкоформатная печать' },
    { id: 4, title: 'Упаковка продукции', category: 'Флексографическая печать' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Алексей Петров',
      company: 'ООО "Альфа"',
      text: 'Отличное качество печати! Заказывали широкоформатные баннеры для выставки. Все сделали быстро и профессионально.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Мария Иванова',
      company: 'Кафе "Уют"',
      text: 'Разработали логотип и сделали световую вывеску. Результат превзошел ожидания! Рекомендуем!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      company: 'Магазин "Продукты"',
      text: 'Сотрудничаем уже 2 года. Всегда качественно, в срок и по разумным ценам.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/files/a52fdd12-861f-47d0-a089-c34f695f6d6c.png"
                alt="Гранд-дизайн"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex gap-6">
              {['about', 'services', 'portfolio', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-[#FFD700] ${
                    activeSection === section ? 'text-[#FFD700]' : ''
                  }`}
                >
                  {section === 'about' && 'О нас'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Рекламно-полиграфический центр
            <br />
            <span className="text-[#FFD700]">Гранд-дизайн</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Полный спектр рекламных и полиграфических услуг
          </p>
          <Button
            onClick={() => scrollToSection('services')}
            size="lg"
            className="bg-[#E91E63] hover:bg-[#E91E63]/90 text-white text-lg px-8 py-6"
          >
            Наши услуги
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">О нас</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 text-foreground">
              <strong>Гранд-дизайн</strong> — это современный рекламно-полиграфический центр с многолетним
              опытом работы. Мы специализируемся на создании качественной рекламной продукции любой
              сложности.
            </p>
            <p className="text-lg text-foreground">
              Наша команда профессионалов использует передовое оборудование и материалы, чтобы
              воплотить в жизнь самые смелые идеи наших клиентов.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши услуги</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover-scale cursor-pointer overflow-hidden border-2 hover:border-primary transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-scale cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Наш адрес</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <p className="text-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <p className="text-foreground">+7 (495) 123-45-67</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <p className="text-foreground">info@grand-design.ru</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <p className="text-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходной</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Мы в соцсетях</h3>
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">QR-код ВКонтакте</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Отсканируйте код для перехода на нашу страницу ВКонтакте</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <img
                src="https://cdn.poehali.dev/files/a52fdd12-861f-47d0-a089-c34f695f6d6c.png"
                alt="Гранд-дизайн"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm opacity-90">
                Рекламно-полиграфический центр полного цикла
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>г. Москва, ул. Примерная, д. 123</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@grand-design.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Режим работы</h4>
              <div className="text-sm opacity-90">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
            <p>© 2024 Гранд-дизайн. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
