import React, {Component} from 'react';
import { UserProfile, UserRepos, Notes} from '../../components';
import { mixin } from 'core-decorators';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

@mixin(ReactFireMixin)
class Profile extends Component {
  state = {
    notes: ['1','2','3'],
    bio: {
      name:'gaoquan'
    },
    repos:['a','b','c']
  }
  componentDidMount(){
    //为了读写数据，我们首先创建一个firebase数据库的引用
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    //调用child来往引用地址后面追加请求，获取数据
    var childRef = this.ref.child(this.props.params.username);
    //将获取的数据转换成数组并且赋给this.state.notes
    this.bindAsArray(childRef,'notes');
  }
  componentWillUnMount(){
    this.unbind('notes')
  }
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile
            username={this.props.params.username}
            bio={this.state.bio}
          />
        </div>
        <div className="col-md-4">
          <UserRepos
            repos={this.state.repos}
          />
        </div>
        <div className="col-md-4">
          <Notes
            notes={this.state.notes}
          />
        </div>
      </div>
    )
  }
}

export default Profile