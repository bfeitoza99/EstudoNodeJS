import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancelletionMail {
  get key() {
    return 'CancelletionMail';
  }

  async handle({ data }) {
    console.log(data);
    const { appointment } = data;
    console.log(appointment);
    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          },
        ),
      },
    });
  }
}

export default new CancelletionMail();
