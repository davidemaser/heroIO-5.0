/**
 * Created by David Maser on 09/06/2017.
 */
import "../css/globals.css";
import "../assets/lib/bootstrap-datetimepicker.min.css";
import "../assets/lib/bootstrap.min.css";
import '../assets/lib/bootstrap.min';
import '../assets/lib/bootstrap-datetimepicker.min';
import '../assets/fonts/webFont.css';
//import 'moment'; let webpack resolve moment in the assets/lib folder
import {app} from './components/Config';
import {Init} from './components/Init';
import {Language} from './components/Language';
import './components/EventHandlers';

global.pfHero = 0;
global.pfMode = app.params.s;
global.pfExport = 'hero';
global.sPos = 0;
global.pfLang = app.lang;

$(() => {
  Init.setHeadSec();
  Init.initializeTheme();
  Init.initHelp();
  Init.getVersion(true);
  new Language(app.lang, true);
  $('.date_obj').datetimepicker({format: 'MM/DD/YYYY HH:mm'});
  $('.btnAdd').attr('disabled', false);
  $('.btnDel').attr('disabled', true);
});