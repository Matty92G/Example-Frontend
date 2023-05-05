import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ScoreBoard = (props) => {
  console.log(props.score.name);
  return (
    <tr>
      <td>{props.score.name}</td>
      <td>{props.score.score}</td>
      <td>
        <img src={props.score.img} />
      </td>
      <td>{props.score.date}</td>
    </tr>
  );
};

// [
//   {
//     _id: '6452b7b3f4ceb8a3ee677f20',
//     name: 'No Score',
//     score: 0,
//     img: 'https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg',
//     date: '2023-05-03T19:35:01.750Z',
//     __v: 0,
//   },
//   {
//     _id: '6454151ef6ba243f26b2dc0d',
//     name: 'Default Image',
//     score: 10,
//     img: 'https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg',
//     date: '2023-05-04T20:22:34.678Z',
//     __v: 0,
//   },
// ];

export default class ScoreBoardList extends Component {
  constructor(props) {
    super(props);

    this.state = { scores: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3010/scoreboard/')
      .then((response) => {
        this.setState({ scores: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  scoreList() {
    return this.state.scores.map((currentscore) => {
      return <ScoreBoard score={currentscore} key={currentscore._id} />;
    });
  }

  render() {
    return (
      <div>
        <p>ScoreBoard List!</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Image</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.scoreList()}</tbody>
        </table>
      </div>
    );
  }
}
