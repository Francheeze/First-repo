import Card from "./Card";

function Education({ education }) {
  return (
    <Card title="Education">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Program</th>
            <th>Institution</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.program}</td>
              <td>{item.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Education;