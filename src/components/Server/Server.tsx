import "./Server.scss";
import Select from "../../UI/Select/Select.tsx";
import bdSvg from "../../assets/bd.png";
import ramSvg from "../../assets/ozy.png";
import processor from "../../assets/pro.png";
import network from "../../assets/network.png";
import ip from "../../assets/ip.png";
import infoApi from "../../assets/info-api.png";
import security from "../../assets/security.png";
const Server = () => {
  return (
    <>
      <div className="server">
        <h2 className="server__name">Сервер</h2>
        <div className="server__container">
          <Select
            items={[
              {
                value: "2",
                label:
                  "2 × Intel Xeon E5-2620 v3 2.40/3.20 Ггц (всего 12 ядер, 24 пото",
                cost: "29500",
              },
              { value: "3", label: "Audi", cost: "42500" },
              { value: "4", label: "Citroen", cost: "15500" },
            ]}
            icon={processor}
            label="Процессор"
          />
          <Select
            items={[
              {
                value: "2",
                label: "8 Гб",
                cost: "19500",
              },
              { value: "3", label: "16 Гб", cost: "59500" },
              { value: "4", label: "32 Гб", cost: "8500" },
            ]}
            icon={ramSvg}
            label="Озу"
          />
          <Select
            items={[
              {
                value: "2",
                label: "SSD M.2 2280 1TB",
                cost: "19500",
              },
              { value: "3", label: "Audi", cost: "19500" },
              { value: "4", label: "Citroen", cost: "19500" },
            ]}
            icon={bdSvg}
            label="Системный диск"
          />
          <Select
            items={[
              {
                value: "2",
                label: "Нет",
                cost: "0",
              },
              { value: "3", label: "SSD M.2 2280 1TB", cost: "19500" },
              { value: "4", label: "Citroen", cost: "19500" },
            ]}
            icon={bdSvg}
            label="Диск 2"
          />

          <Select
            items={[
              {
                value: "2",
                label: "Нет",
                cost: "0",
              },
              { value: "3", label: "SSD M.2 2280 1TB", cost: "19500" },
            ]}
            icon={bdSvg}
            label="Диск 3"
          />
        </div>
        <h3 className="server__add-new-disk">Добавить еще дисков</h3>
        <div className="server__network">
          <Select
            items={[
              {
                value: "2",
                label: "Нет",
                cost: "0",
              },
              { value: "3", label: "SSD M.2 2280 1TB", cost: "10500" },
            ]}
            icon={network}
            label="Системный диск 1"
          />
        </div>
        <div className="server__footer">
          <h3 className="server__information">
            Все сервера комплектуются двумя блоками питания и подключаются к
            независимым линиям электроснабжения.
          </h3>
          <h2 className="server__total_sum">232 000 тг/мес</h2>
        </div>
      </div>
      <div className="server__add">Добавить сервер</div>
      <div className="server">
        <h2 className="server__name">Блок IP-адресов</h2>
        <div className="server__network">
          <Select
            items={[
              {
                value: "2",
                label: "Блок из 4 IP-адресов (/30)",
                cost: "11500",
              },
              { value: "3", label: "Audi", cost: "1500" },
              { value: "4", label: "Citroen", cost: "29500" },
            ]}
            icon={ip}
            label="Блок IP-адресов"
          />
          <div className="ip__information">
            <img
              src={infoApi}
              alt="information"
              className="ip__information__info-icon"
            />
            <p className="ip__information__info-text">
              Мы поддерживаем IPv6 и можем предоставить блок IP-адресов /64
              бесплатно.
            </p>
          </div>
        </div>
      </div>
      <div className="server">
        <h2 className="server__name">Фаервол FortiGate</h2>
        <div className="server__network">
          <Select
            items={[
              {
                value: "2",
                label: "Не показывать",
                cost: "0",
              },
              { value: "3", label: "Audi", cost: "12500" },
              { value: "4", label: "Citroen", cost: "15500" },
            ]}
            icon={security}
            label="Выберите блок"
          />
        </div>
      </div>
      <div className="server__adding-cart">
        <div className="server__adding-btn">Добавить в корзину</div>
        <div className="server__total_sum">за 415 000 тг/мес</div>
        <div className="server__description">
          В стоимость входит подключение к сети Интернет на скорости до 100
          Мбит/c, без ограничения объема трафика.
        </div>
      </div>
    </>
  );
};

export default Server;
