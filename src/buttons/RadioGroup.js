  // 공통 라디오 버튼 컴포넌트
  const RadioGroup = ({ options, name, state, onChange }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={state === option}
            onChange={onChange}
          />{' '}
          {option}
        </label>
      ))}
    </div>
  );


export default RadioGroup;