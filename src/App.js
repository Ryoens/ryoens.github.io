import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import { Button } from 'react-bootstrap';
import CircleImage from './components/CircleImage';

class App extends Component {
  render() {
      return (
        <body>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand href="#home" className="text-center helvetica-font">
                  <h1 style={{color: 'black'}}>&nbsp;Enkey.net</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto me-2">
                      <Nav.Link href="#Home">&nbsp;Home</Nav.Link>
                      <Nav.Link href="#Server">&nbsp;Servers</Nav.Link>
                      <Nav.Link href="#Article">&nbsp;Articles</Nav.Link>
                      <Nav.Link href="#Contact">&nbsp;Contact</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>

        <div class="container-sd image" className='start'>
          <div className='circle'>
            <CircleImage 
              // imageUrl="https://example.com/your-image.jpg" 
              altText="Image"
            />
          </div>
          <h1> Ryo (Enkey) </h1>
          <p class="TextSize">広島でネットワークを学んでる大学院生です</p>
          <p class="TextSize">Go / Python / Docker あたりの技術が好きです</p>
          <p class="TextSize">最近はProxmox / Kubernetes / BGP などを勉強してます！</p>
          <p class="TextSize">React (frontend全般) 初心者です</p>
        {/* この後にタグで任意の箇所に飛べるようにしたい */}
        </div>

        {/* できれば木構造にしたい */}
        <div class="container-sd image" className='line'>
          <h2>Profile</h2>
          <div className='margin'></div>
          <h3>所属</h3>
          <div className='left'>
          <ul className='list_none'>
            <li>2020/04 ~ 2024/04　広島市立大学 情報科学部 情報工学科</li>
            <ul className='list_circle'>
              {/* <li>2021/04 ~ 2024/04　情報工学科 </li> */}
              <li>2022/09 ~　ネットワーク科学研究室</li>
              <li>2023/04 ~　先端ネットワーク・セキュリティ研究グループ <br></br><div className='profile'> 複雑コミュニケーション科学研究グループ</div></li>
              <li>2023/09 ~　いちぴろ・エクスプローラ (技術系サークル) </li>
            </ul>
            <li>2024/04 ~ 現在　広島市立大学 情報科学研究科 情報工学専攻</li>
            {/* <li>リスト項目 3</li> */}
          </ul>
          </div>

          <div style={{ marginTop: '100px' }}></div>

          <h3>Account</h3>
          <div className='left'>
          <ul className='list_none'>
            <li>X (Twitter):　<a href="https://twitter.com/enkey_216" class="link">@enkey_216</a></li>
            <li>GitHub:　<a href="https://github.com/Ryoens" class="link">@Ryoens</a></li>
            <li>Zenn:　<a href="https://zenn.dev/enkey" class="link">@enkey</a></li>
            <li>discord:　@ryo2252</li>
          </ul>
          </div>
        </div>

        {/* <div style={{ marginTop: '10px' }}></div> */}

        <div class="container-sd image" className='line'>
        <h2>Qualification</h2>
        <div className='left'>
          <ul className='list_none'>
            <li>2024/05　基本情報技術者</li>
            <li>2024/06　IPv6基礎検定</li>
          </ul>
          </div>
        </div>
        
        {/* 一番最新のやつにNewマークをつける */}
        {/* インターンとイベントで分ける */}
        <div class="container-sd image" className='line'>
          <h2>Event</h2>
          <div className='margin'></div>
          <h3>Internship</h3>
          <div className='left'>
          <ul className='list_none'>
            <li>2024/10: ソニーネットワークコミュニケーションズ株式会社 インターン 2weeks</li>
            <li>2024/09: freee株式会社 就業型インターン(統合モジュール) 2weeks</li>
            <li>2024/08: さくらインターネット株式会社 インターン 5days</li>
            <li>2024/08: アルテリア・ネットワークス株式会社 インターン 5days</li>
            <li>2024/08: ニフティ株式会社 インターン 5days</li>
            <li>2024/07: NTTドコモ TechWorkshop ネットワーク 1day</li>
            <li>2023/06: 株式会社サイバーエージェント クラウド体験型インターンシップ ~仮想マシン編~ 2days</li>
            <li>2022/09: 株式会社GMOインターネット インフラインターン 5days</li>
          </ul>
          </div>
          <div className='margin'></div>
          <h3>その他</h3>
          <div className='left'>
          <ul className='list_none'>
            <li>2024/08: セキュリティミニキャンプ広島</li>
            <li>2024/07: JANOG54 若者支援</li>
            <li>2024/04: GMO DevSeqOpsThon 2024</li>
            <li>2023/09 ~ 2024/03: 広島地域IPv6推進委員会 IPv6勉強会</li>
            <li>2022/03 Ruby合宿2022春 (オンライン)</li>
          </ul>
          </div>
        </div>

        <div className='margin'></div>

        </body>
      );
  }
}

export default App;
// export default RouterApp;
