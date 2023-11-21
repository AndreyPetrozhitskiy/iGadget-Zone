import React from "react"
import "../../style/payment.scss"
import PhotoCard from "../../image/instcard.png"
import Bank from "../../image/bank.png"
const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__container">
          <h1>Оплата</h1>
          <p className="bold">Вы можете оплатить заказ:</p>

          <p>При самовывозе:</p>
          <ol>
            <li>Наличными в розничном магазине при получении заказа</li>
            <li>Переводом на Сбербанк, Тинькофф Банк или Райффайзен Банк</li>
            <li>Банковской картой Visa, Mastercard или МИР</li>
          </ol>

          <p>При доставке по Владивостоку или регионам:</p>
          <ol>
            <li>Переводом на Сбербанк, Тинькофф Банк или Райффайзен Банк</li>
            <li>Банковской картой Visa, Mastercard или МИР через сайт при оформлении заказа</li>
          </ol>

          <p className="bold">Правила оплаты картой:</p>
          <p>К оплате принимаются платежные системы: VISA Inc, MasterCard WorldWide, МИР</p>
          <p>Для оплаты товара банковской картой при оформлении заказа в интернет-магазине выберите способ оплаты: банковской картой.</p>
          <p>При оплате заказа банковской карточкой, обработка платежа происходит на авторизационной странице банка, где Вам необходимо ввести данные Вашей банковской карты:</p>

          <ol>
            <li>Тип</li>
            <li>Номер</li>
            <li>Cрок действия (указан на лицевой стороне)</li>
            <li>Имя держателя (латинскими буквами)</li>
            <li> CVC2/CVV2 код</li>
          </ol>
      
          <img src={PhotoCard} />

          <p>Если Ваша карта подключена к услуге 3D-Secure, Вы будете автоматически переадресованы на страницу банка, который ее выпустил, для прохождения процедуры аутентификации. Информацию о правилах и методах дополнительной идентификации уточняйте в Банке, выдавшем Вам банковскую карту.</p>
          <p>Безопасность обработки интернет-платежей через платежный шлюз банка гарантирована международным сертификатом безопасности PCI DSS. Передача информации происходит с применением технологии шифрования SSL.  Эта информация недоступна посторонним лицам.</p>
          <p className="bold">Советы и рекомендации по необходимым мерам безопасности проведения платежей с использованием банковской карточки:</p>

          <ol>
            <li>Берегите свои пластиковые карты так же, как бережете наличные деньги. Не забывайте их в машине, ресторане, магазине и т.д.</li>
            <li>Никогда не передавайте полный номер своей кредитной карты по телефону каким-либо лицам или компаниям</li>
            <li>Всегда имейте под рукой номер телефона для экстренной связи с банком, выпустившим вашу карту, и в случае ее утраты немедленно свяжитесь с банком</li>
            <li>Вводите реквизиты только при совершении покупки. Никогда не указывайте их по каким-то другим причинам.</li>
          </ol>

          <img src={Bank} />



      </div>
    </div>
  )
};

export default Payment;