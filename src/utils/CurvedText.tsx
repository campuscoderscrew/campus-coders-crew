
//npm install react-curved-text
import ReactCurvedText from 'react-curved-text';

interface CurvedArgs {
  name: string
  reversed: boolean
  member: boolean
}


// TODO: Create a function to add empty spaces to center the text
export default function CurvedText({name, reversed, member} : CurvedArgs) {
  const text = reversed ? 
    ("‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎" + name) :
    ("‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎ ‎ ‎ ‎  ‎  " + name)
    return (
      <ReactCurvedText
        width= {430}
        height= {430}
        cx={215}      // Center X
        cy={215}      // Center Y
        rx={member ? 150 : 190}      // Horizontal radius (controls curvature)
        ry={member ? 150: 190}      // Vertical radius (should be equal to rx for a more symmetrical curve)
        text={text}
        reversed={reversed}  // Reversing the curve for downward direction
        startOffset= {member ? -135 : 0}
        textProps={{ style: { fontSize: member ? '30px': '50px', 
            fontFamily: 'neuton', // Use a web-safe font or load your custom font
            fill: (reversed && member) ? '#474C7E' : (reversed ? '#7886C7' : '#2D336B'), // Text color
            dominantBaseline: 'middle',
            fontWeight: member ? '600' : 'normal',
            letterSpacing: member ? '0.2em' : 'normal'} }}
        svgProps={ {}}
        />
    );
  };