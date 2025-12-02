import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServiceInfo {
  name: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
  examples: string[];
  image: string;
}

const servicesData: Record<string, ServiceInfo> = {
  'световые-короба': {
    name: 'Световые короба',
    icon: 'Box',
    color: 'bg-[#FFD700]',
    description: 'Изготовление световых коробов любой сложности и размера. Используем качественные материалы и современные LED-технологии для создания яркой и долговечной рекламы.',
    image: 'https://cdn.poehali.dev/projects/aa48e85f-558f-4273-a4b2-5e1a95e6363a/files/5d01a11e-6c83-44bf-b8da-9a8f63072b6e.jpg',
    features: [
      'Индивидуальный дизайн',
      'Светодиодная подсветка',
      'Устойчивость к погодным условиям',
      'Долгий срок службы',
      'Энергоэффективность'
    ],
    examples: [
      'Фасадные световые короба',
      'Подвесные конструкции',
      'Двусторонние короба',
      'Объемные буквы с подсветкой'
    ]
  },
  'широкоформатная-печать': {
    name: 'Широкоформатная печать',
    icon: 'Printer',
    color: 'bg-[#E91E63]',
    description: 'Профессиональная широкоформатная печать на различных материалах. Идеально для наружной рекламы, выставочных стендов и оформления интерьеров.',
    image: 'https://cdn.poehali.dev/projects/aa48e85f-558f-4273-a4b2-5e1a95e6363a/files/a09a667e-6414-4e5c-84ff-592bd5481df0.jpg',
    features: [
      'Печать до 5 метров шириной',
      'Высокое разрешение печати',
      'Различные материалы носителей',
      'Устойчивость к выцветанию',
      'Быстрое изготовление'
    ],
    examples: [
      'Баннеры и растяжки',
      'Билборды',
      'Постеры и афиши',
      'Фотообои',
      'Оклейка витрин'
    ]
  },
  'световые-вывески': {
    name: 'Световые вывески',
    icon: 'Lightbulb',
    color: 'bg-[#00BCD4]',
    description: 'Создание эффектных световых вывесок для привлечения внимания к вашему бизнесу. Современные решения с использованием LED-технологий.',
    image: 'https://cdn.poehali.dev/projects/aa48e85f-558f-4273-a4b2-5e1a95e6363a/files/868abe60-b142-4121-9296-a441a979f52e.jpg',
    features: [
      'Объемные световые буквы',
      'Контражурная подсветка',
      'Неоновые вывески',
      'Светодиодные экраны',
      'Управление яркостью'
    ],
    examples: [
      'Вывески для магазинов',
      'Кафе и рестораны',
      'Офисные вывески',
      'Входные группы',
      'Информационные табло'
    ]
  },
  'офсетная-печать': {
    name: 'Офсетная печать',
    icon: 'FileText',
    color: 'bg-[#FFD700]',
    description: 'Классическая офсетная печать для больших тиражей полиграфической продукции. Отличное качество и экономичность при печати от 500 экземпляров.',
    image: 'https://cdn.poehali.dev/projects/aa48e85f-558f-4273-a4b2-5e1a95e6363a/files/a09a667e-6414-4e5c-84ff-592bd5481df0.jpg',
    features: [
      'Высокое качество печати',
      'Экономия на больших тиражах',
      'Широкий выбор бумаги',
      'Печать Pantone',
      'Различные форматы'
    ],
    examples: [
      'Визитки и флаеры',
      'Каталоги и брошюры',
      'Журналы',
      'Упаковка',
      'Календари'
    ]
  },
  'цифровая-печать': {
    name: 'Цифровая печать',
    icon: 'Monitor',
    color: 'bg-[#E91E63]',
    description: 'Оперативная цифровая печать малых и средних тиражей. Идеально для срочных заказов и персонализированной продукции.',
    image: 'https://cdn.poehali.dev/projects/aa48e85f-558f-4273-a4b2-5e1a95e6363a/files/a09a667e-6414-4e5c-84ff-592bd5481df0.jpg',
    features: [
      'Печать от 1 экземпляра',
      'Быстрое изготовление',
      'Персонализация',
      'Печать переменных данных',
      'Доступные цены'
    ],
    examples: [
      'Визитки',
      'Листовки',
      'Буклеты',
      'Сертификаты',
      'Пригласительные'
    ]
  },
  'разработка-логотипов': {
    name: 'Разработка логотипов',
    icon: 'Palette',
    color: 'bg-[#00BCD4]',
    description: 'Профессиональная разработка фирменного стиля и логотипов. Создаем уникальные визуальные решения для вашего бренда.',
    image: 'https://cdn.poehali.dev/projects/aa48e85f-558f-4273-a4b2-5e1a95e6363a/files/0f86f31f-7560-4864-96e6-4f6cda3e92ce.jpg',
    features: [
      'Индивидуальный подход',
      'Несколько вариантов',
      'Фирменный стиль',
      'Брендбук',
      'Правки до результата'
    ],
    examples: [
      'Логотип компании',
      'Фирменный стиль',
      'Брендбук',
      'Визитки и бланки',
      'Упаковка продукции'
    ]
  },
  'флексографическая-печать': {
    name: 'Флексографическая печать',
    icon: 'Stamp',
    color: 'bg-[#FFD700]',
    description: 'Специализированная печать для упаковочных материалов. Идеально подходит для печати на пленке, картоне и других нестандартных материалах.',
    image: 'https://cdn.poehali.dev/projects/aa48e85f-558f-4273-a4b2-5e1a95e6363a/files/a09a667e-6414-4e5c-84ff-592bd5481df0.jpg',
    features: [
      'Печать на различных материалах',
      'Высокая скорость печати',
      'Экономичность',
      'Стойкость красок',
      'Большие тиражи'
    ],
    examples: [
      'Этикетки',
      'Упаковочная пленка',
      'Пакеты',
      'Стикеры',
      'Гибкая упаковка'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Услуга не найдена</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

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
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-primary-foreground">
          <div className="flex items-center gap-6 mb-6">
            <div className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg`}>
              <Icon name={service.icon} size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.name}</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">{service.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                  <Icon name="CheckCircle" size={28} className="text-accent" />
                  Преимущества
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                  <Icon name="List" size={28} className="text-secondary" />
                  Что мы делаем
                </h2>
                <ul className="space-y-4">
                  {service.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="ArrowRight" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Примеры работ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover-scale">
                <div className="h-64 bg-gradient-to-br from-primary to-secondary"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Заинтересовала услуга?</h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и наш менеджер свяжется с вами для обсуждения деталей проекта
          </p>
          <Button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
          >
            <Icon name="Mail" size={24} className="mr-2" />
            Оставить заявку
          </Button>
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
              <p className="text-sm opacity-90">Рекламно-полиграфический центр полного цикла</p>
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

export default ServiceDetail;