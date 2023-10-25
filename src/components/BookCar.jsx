import { useEffect, useState } from "react";
import Delorean2 from "../images/cars-big/Delorean2.png";
import Batmobile2 from "../images/cars-big/batmobile2.png";
import kitt1 from "../images/cars-big/kitt1.png";
import Ectomobile2 from "../images/cars-big/Ectomobile2.png";
import mystery2 from "../images/cars-big/mistery2.webp";
import Warthog2 from "../images/cars-big/Warthog2.webp";
import mach5 from "../images/cars-big/mach5-2.webp";
import supra2 from "../images/cars-big/supra2.jpg";
import impala from "../images/cars-big/impala.jpg";
import herbie from "../images/cars-big/herbie2.jpeg";
import ateam from "../images/cars-big/ateam2.jpg";
import bmw from "../images/cars-big/bmw2.jpg";

import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { CAR_DATA } from "./CarData";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "DeLorean DMC-12":
      imgUrl = Delorean2;
      break;
    case "Batmobile":
      imgUrl = Batmobile2;
      break;
    case "KITT":
      imgUrl = kitt1;
      break;
    case "Ecto-1 (Ghostbusters)":
      imgUrl = Ectomobile2;
      break;
    case "Máquina de mistério":
      imgUrl = mystery2;
      break;
    case "Warthog":
      imgUrl = Warthog2;
      break;
    case "Mach 5":
      imgUrl = mach5;
      break;
    case "Supra":
      imgUrl = supra2;
      break;
    case "Chevrolet Impala":
      imgUrl = impala;
      break;
    case "Herbie":
      imgUrl = herbie;
      break;
    case "The A-Team Van":
      imgUrl = ateam;
      break;
    case "E46 BMW M3 GTR":
      imgUrl = bmw;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  const locations = [
    {
      id: 1,
      name: "Rio de Janeiro",
    },
    {
      id: 2,
      name: "São Paulo",
    },
    {
      id: 3,
      name: "Belo Horizonte",
    },
    {
      id: 4,
      name: "Brasília",
    },
    {
      id: 5,
      name: "Salvador",
    },
    {
      id: 6,
      name: "Fortaleza",
    },
    {
      id: 7,
      name: "Porto Alegre",
    },
    {
      id: 8,
      name: "Recife",
    },
    {
      id: 9,
      name: "Curitiba",
    },
    {
      id: 10,
      name: "Manaus",
    },
    {
      id: 11,
      name: "Belém",
    },
    {
      id: 12,
      name: "Goiânia",
    },
  ];

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Alugue um carro</h2>

              <p className="error-message">
                Todos os campos são obrigatórios!{" "}
                <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Verifique seu e-mail para confirmar o pedido{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Selecione seu
                    carro <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Selecione o modelo</option>
                    {CAR_DATA.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Retirada{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Selecione um local de retirada</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Devolução{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Selecione um local de devolução</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Data da
                    entrega <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Data da
                    devolução <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete o pedido de reserva</h2>
          <IconX onClick={openModal} />
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> Após concluir esta consulta de reserva,
            você receberá:
          </h4>
          <p>
            Seu pedido de reserva e confirmação pelo celular e email
            cadastrados.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Local e data</h5>
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Data de retirada</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Data de devolução</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Local de retirada</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Local de devolução</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Carro - </span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Informações pessoais</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  Nome <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Digite nome"
                ></input>
                <p className="error-modal">Esta campo é obrigatório.</p>
              </span>

              <span>
                <label>
                  Sobrenome <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Digite sobrenome"
                ></input>
                <p className="error-modal ">Esta campo é obrigatório.</p>
              </span>

              <span>
                <label>
                  Telefone <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Digite seu telefone"
                ></input>
                <p className="error-modal">Esta campo é obrigatório.</p>
              </span>

              <span>
                <label>
                  Idade <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="Digite idade"
                ></input>
                <p className="error-modal ">Esta campo é obrigatório.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Digite o email"
                ></input>
                <p className="error-modal">Esta campo é obrigatório.</p>
              </span>

              <span>
                <label>
                  Endereço <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Digite o endereço"
                ></input>
                <p className="error-modal ">Esta campo é obrigatório.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  Cidade <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Digite a cidade"
                ></input>
                <p className="error-modal">Esta campo é obrigatório.</p>
              </span>

              <span>
                <label>
                  CEP <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Digite o cep"
                ></input>
                <p className="error-modal ">Esta campo é obrigatório.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Por favor me envie as ultimas atualizações.</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reservar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
