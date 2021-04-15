import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import book from '../assets/book.png';

export default class Footer extends Component {
  render() {

    const footerImgStyle = {
      maxHeight: "200px",
      maxWidth: "200px"
    }

    return (
      <Container fluid style={{ backgroundColor: "#343434" }}>
        <Container className="footer p-4">
          <Row className="text-center">
            <Col className="footer-logo">
              <a href="/" title="На главную страницу">
                <img src={book} className="w-100" style={footerImgStyle} />
              </a><br />
              <p className="text-muted">Онлайн школа обучения<br />IT профессиям</p>
            </Col>
            <Col>
              <p className="text-white">Информация</p>
              <ul>
                <li><a href="gift">Сертификаты</a></li>
                <li><a href="spravka/">Справочники</a></li>
                <li><a href="vacancy">Вакансии</a></li>
              </ul>
              <ul class="last">
                <li><a href="about">О нас</a></li>
                <li><a href="rights">Соглашение</a></li>
                <li><a href="sitemap">Карта сайта</a></li>
              </ul>
            </Col>
            <Col>
              <p className="text-white" >Аккаунт</p>
              <ul>
                <li><a href="user/">Войти</a></li>
                <li><a href="reg">Регистрация</a></li>
                <li><a href="kontakti">Обратная связь</a></li>
              </ul>
            </Col>
            <Col>
              <p className="text-muted">Подпишитесь на рассылку и сразу же получите 5 практических заданий по программированию!</p>
              <p className="text-muted">Пишите: <noindex><a href="mailto:help@itproger.com" rel="nofollow">help@pylounge.com</a></noindex></p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center footer-icons">
            <a href="#" target="_blank" rel="nofollow">
              <i className="fab fa-vk"></i>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <i className="fab fa-instagram"></i>
            </a>
          </Row>
        </Container>
      </Container>
    )
  }
}