import React, {Component} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Store, {CLEAR_STATE} from '../../store'
import StepOne from './Step1'
import StepTwo from './Step2'
import StepThree from './Step3'

class Wizard extends Component {
    render(){
        return (
            <div>
                <h1>You're a wizard Harry</h1>
                <Link to='/dashboard'><button>Cancel</button></Link>
                <Switch>
                    <Route path='/wizard/step1' Component={StepOne}/>
                    <Route path ='/wizards/step2' Component={StepTwo}/>
                    <Route path = '/wizard/step3' Component={StepThree}/>
                </Switch>
                <div className='nav-buttons'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        )
    }
}
export default Wizard 