// 공통 체크박스 컴포넌트
const CheckboxGroup = ({ options, name, state, onChange }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={state.includes(option)}
            onChange={onChange}
          />{' '}
          {option}
        </label>
      ))}
    </div>
  );
  
  export default CheckboxGroup;