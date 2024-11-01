import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>슈크린(Shoe Clean) 사업소개</h1>
      <br />
      <section style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h4>상품 이미지 예시</h4>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
            src={"/survey/shoe_cleaner.png"}
            alt="슈크린 상품 이미지"
            style={{ width: '250px', marginRight: '20px' }}
          />
        </div>
      </section>
<br></br>
      <section style={{ marginTop: '20px' }}>
        <h2> 전북대학교 설치 계획 </h2>
        <p>주요 설치 장소:</p>
        <ul>
          <li>기숙사</li>
          <li>체육관</li>
          <li>도서관 출입구</li>
        </ul>
        <p>제공 기능:</p>
        <ul>
          <li>신발 UV 살균 및 탈취</li>
          <li>저온 건조 기술을 통한 습기 제거</li>
        </ul>
        <p>설치 목적:</p>
        <ul>
          <li>학생들의 신발 위생 관리 향상</li>
          <li>생활 편의성 제공 및 학교 복지 서비스 강화</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px', marginBottom: '30px' }}>
          <Link to="/survey" style={{ textDecoration: 'none', color: 'blue' }}>
            설문조사 참여하기
          </Link>
      </section>
    </div>
  );
};

export default HomePage;
