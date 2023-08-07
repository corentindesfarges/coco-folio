import "./TextSwap.css"

export default function TextSwap({ prefix = "", words = [] }) {
  return (
    <div className="text-swap">
      {prefix && <div className="prefix mr-2 lg:mr-4">{prefix} </div>}
      <div className="visble-word">
        <div className="words-container">
          {words.map((word, index) => (
            <div key={index} className="font-bold underline">
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
