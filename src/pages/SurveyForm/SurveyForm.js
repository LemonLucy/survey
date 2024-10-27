// src/SurveyForm.js
import React, { useState } from 'react';
import CheckboxGroup from '../../buttons/CheckboxGroup';
import RadioGroup from '../../buttons/RadioGroup';
import { db } from '../../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SurveyForm = () => {
  const navigate = useNavigate();
  const [survey, setSurvey] = useState({
    q1: [],
    q1Etc: '',
    q2: [],
    q2Etc: '',
    q3: '',
    q3Etc: '',
    q4: '',
    contact: '',
    consent: ''
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setSurvey((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value)
      }));
    } else {
      setSurvey((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const { q1, q2, q3 } = survey;
    if (q1.length === 0) {
      alert('Q1에 응답해 주세요.');
      return false;
    }
    if (q2.length === 0) {
      alert('Q2에 응답해 주세요.');
      return false;
    }
    if (q3 === '') {
      alert('Q3에 응답해 주세요.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // 유효성 검사 통과 실패 시 제출 중단

    try {
      const docRef = await addDoc(collection(db, 'surveys'), survey);
      console.log('Document written with ID: ', docRef.id);
      alert('설문조사가 성공적으로 제출되었습니다!');
      navigate('/thank-you');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('설문조사 제출에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>

      <h3>Q1. 어떤 기능을 이용해보고 싶으신가요? (중복 선택 가능)</h3>
      <CheckboxGroup
        options={[
          '신발 건조',
          '항균 및 살균',
          '신발 밑창 분석을 통한 걸음걸이 교정',
          '발 상태(피로도, 건강 상태) 진단',
          '예약 시스템을 통한 신발 건조기 사용 예약'
        ]}
        name="q1"
        state={survey.q1}
        onChange={handleChange}
      />
      <label style={{ display: 'block', margin: '10px 0' }}>
        기타: <input type="text" name="q1Etc" onChange={handleChange} />
      </label>

      <h3>Q2. 슈크린이 어디에 설치되면 가장 자주 사용할 것 같으신가요?</h3>
      <CheckboxGroup
        options={['도서관', '연구실', '운동시설', '스터디카페', '기숙사']}
        name="q2"
        state={survey.q2}
        onChange={handleChange}
      />
      <label style={{ display: 'block', margin: '10px 0' }}>
        기타: <input type="text" name="q2Etc" onChange={handleChange} />
      </label>

      <h3>Q3. 슈크린 사용에 적정하다고 생각되는 1회 이용 금액을 선택해주세요.</h3>
      <RadioGroup
        options={['무료', '3000원', '3500원', '4,000원', '4,500원', '5,000원']}
        name="q3"
        state={survey.q3}
        onChange={handleChange}
      />
      <label style={{ display: 'block', margin: '10px 0' }}>
        (직접 입력): <input type="text" name="q3Etc" onChange={handleChange} />
      </label>

      <h3>Q4. 슈크린에 대해 더 추가하고 싶은 의견이 있으신가요?</h3>
      <textarea
        name="q4"
        rows="4"
        cols="50"
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '20px' }}
      ></textarea>

      {/* <h3>Q5. 설문에 참여해주셔서 감사합니다! 연락처를 남겨주세요.</h3>
      <label>
        연락처(선택): <input type="text" name="contact" onChange={handleChange} />
      </label> */}

      <button type="submit" onClick={handleSubmit} style={{ display: 'block', width: '100%', marginTop: '20px' }}>제출</button>
    </form>
    </>
  );
};

export default SurveyForm;
