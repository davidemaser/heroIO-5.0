/**
 * Created by David Maser on 16/06/2017.
 */
import {app} from './Config';

export default class Alert {
  constructor(mess, state) {
    this.mess = mess;
    this.state = state;
    this.build(this.mess, this.state);
  }

  build(mess, state) {
    let dispLeng = 10000;
    if (app.dialog === true) {
      const mPane = '.panel-body.bottom_level_bt';
      if (state === app.params.e) {
        $(mPane).find(app.objects.g).removeClass('allGood').removeClass('glyphicon-ok').addClass('allBad').addClass('glyphicon-remove');
        dispLeng = app.animation.d.max;
      } else if (state === app.params.g) {
        $(mPane).find(app.objects.g).removeClass('allBad').removeClass('glyphicon-remove').addClass('allGood').addClass('glyphicon-ok');
        dispLeng = 10000;
      }
      $(mPane).slideDown();
      $(mPane).find('.inner_message').html(mess);
      window.setTimeout(() => {
        $('.panel-body.bottom_level_bt').slideUp();
      }, dispLeng);
    }
  }
}