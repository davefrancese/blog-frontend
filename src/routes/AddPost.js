import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'

class AddPost extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="AddPost">
          <h2>Add Post</h2>
          <form>
            <label>Title</label>
            <br />
            <input type='text' name='title'/>
            <br />
            <label>Content</label>
            <br />
            <textarea type='text' name='content'/>
            <br />
            <label>Broadcast?</label>
            <br />
            <input type="radio" name="broadcast" value="true" />Yes
            <input type="radio" name="broadcast" value="false" />No<br />
            <label>What groups should see this?</label>
            <br />
            <select>
              <option value="developers">Developers</option>
              <option value="marketing">Marketing</option>
              <option value="general">General</option>
            </select>
            <br />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPost;
