/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import { Heading, Checkbox } from '../../elements'
import Progress from '../Progress'
import slugify from 'slugify'

class Checklist extends Component {
  constructor(props) {
    super(props)

    let state = {}

    this.props.questions.forEach((q) => {
      const key = slugify(q.toLowerCase())
      state[key] = false
    })

    this.state = {
      ...state
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const name = e.target.name
    
    this.setState({
      [name]: !this.state[name]
    })
  }

  renderChecklistQuestions = () => {
    return this.props.questions.map((question, key) => {
      const name = slugify(question.toLowerCase())
      return (
        <Checkbox
          name={name}
          label={question}
          key={key}
          isChecked={this.state[name]}
          onChange={this.onChange}
        />
      )
    })
  }

  render() {
    return (
      <div
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <Heading>{this.props.headline}</Heading>
        { this.renderChecklistQuestions() }
        <Progress progression={this.state} />
      </div>
    )
  }
}

export default Checklist
