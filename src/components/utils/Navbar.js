import React,{Component} from 'react'
import 'bootstrap'

export default class Navbar extends Component {
    render(){
        return(
            <nav class="navbar navbar-inverse navbar-static-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Teste DG4YOU</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="">Teste Julien</a>
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li class="active"><a href="./">Employe <span class="sr-only">(current)</span></a></li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}