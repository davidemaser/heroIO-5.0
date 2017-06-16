/**
 * Created by David Maser on 09/06/2017.
 */
import {app} from './Config';
import Alert from './Alert';
export const Init ={
  /**
   * creates the initial form instance by
   * populating the parent container with
   * elements defined in a layout.json
   * file
   * @constructor
   */
  initializeForm: () => {
    $.ajax({
      type: app.methods.g,
      url: app.objects.form.l,
      success(data) {
        const dataBlock = data.layout;
        let htmlBlock = `<div id="entry1" class="clonedInput" ${app.handlers.s}="1"><form action="${dataBlock.form_action}" method="${dataBlock.method}" id="${dataBlock.form_id}" role="form">`;
        htmlBlock += dataBlock.header;
        htmlBlock += '<fieldset>';
        const blockContent = dataBlock.block;
        const blockLen = blockContent.length;
        let blocker = '';
        let i, j, k;
        for (i = 0; i < blockLen; i++) {
          if (blockContent[i].display !== 'custom') {
            if (i % 2 === 0 || i === 0) {
              if (blockContent[i].wrap_group === true) {
                htmlBlock += `<div class="${blockContent[i].wrap_group_class}">`;
              }
              htmlBlock += '<div class="form-group">';
              blocker = ' lItem';
            } else {
              blocker = '';
            }
            if (blockContent[i].display !== 'empty') {
              let opLen = '';
              let dtLen = '';
              switch (blockContent[i].display) {
                case "full":
                  let line = '';
                  blocker = '';
                  break;
                case "half":
                  line = 'half_span';
                  break;
              }
              htmlBlock += `<div class="${line} ${blocker}">`;
              htmlBlock += `<label class="label_fn control-label" for="${blockContent[i].obj_id}">${blockContent[i].label}</label>`;
              if (blockContent[i].wrap === true) {
                htmlBlock += `<div class="${blockContent[i].wrap_class}">`;
              }
              if (blockContent[i].inject_code !== '') {
                htmlBlock += blockContent[i].inject_code;
              }
              if (blockContent[i].input_obj === 'text') {
                htmlBlock += '<input';
                if (blockContent[i].obj_id !== '') {
                  htmlBlock += ` id="${blockContent[i].obj_id}" name="${blockContent[i].obj_id}"`;
                }
                htmlBlock += ` type="text" placeholder="${blockContent[i].placeholder}" class="input_fn form-control`;
                if (blockContent[i].class !== '') {
                  htmlBlock += ` ${blockContent[i].class}`;
                }
                if (blockContent[i].obj_label !== '') {
                  htmlBlock += ` ${blockContent[i].obj_label}`;
                }
                htmlBlock += '"';
                if (blockContent[i].options !== null) {
                  opLen = blockContent[i].options.length;
                  for (j = 0; j < opLen; j++) {
                    htmlBlock += ` ${blockContent[i].options[j].item}="${blockContent[i].options[j].value}"`;
                  }
                }
                if (blockContent[i].data !== null) {
                  let dtLen = blockContent[i].data.length;
                  for (k = 0; k < dtLen; k++) {
                    htmlBlock += ` data-${blockContent[i].data[k].item}="${blockContent[i].data[k].value}"`;
                  }
                }
                htmlBlock += '>';
              } else if (blockContent[i].input_obj === 'radio') {
                htmlBlock += '<input';
                htmlBlock += ' type="radio"';
                if (blockContent[i].class !== '') {
                  htmlBlock += ` class="${blockContent[i].class}"`;
                }
                if (blockContent[i].obj_label !== '') {
                  htmlBlock += ` ${blockContent[i].obj_label}`;
                }
                if (blockContent[i].obj_id !== '') {
                  htmlBlock += ` id="${blockContent[i].obj_id}" name="${blockContent[i].obj_id}"`;
                }
                if (blockContent[i].options !== null) {
                  opLen = blockContent[i].options.length;
                  for (j = 0; j < opLen; j++) {
                    htmlBlock += ` ${blockContent[i].options[j].item}="${blockContent[i].options[j].value}"`;
                    if (blockContent[i].options[j].default !== undefined) {
                      htmlBlock += ` ${blockContent[i].options[j].default}`;
                    }
                  }
                }
                if (blockContent[i].data !== null) {
                  dtLen = blockContent[i].data.length;
                  for (k = 0; k < dtLen; k++) {
                    htmlBlock += ` data-${blockContent[i].data[k].item}="${blockContent[i].data[k].value}"`;
                  }
                }
                htmlBlock += '>';
              } else if (blockContent[i].input_obj === 'select') {
                htmlBlock += '<select';
                if (blockContent[i].class !== '') {
                  htmlBlock += ` class="form-control ${blockContent[i].class}"`;
                }
                if (blockContent[i].obj_label !== '') {
                  htmlBlock += ` ${blockContent[i].obj_label}`;
                }
                if (blockContent[i].obj_id !== '') {
                  htmlBlock += ` id="${blockContent[i].obj_id}" name="${blockContent[i].obj_id}"`;
                  if (blockContent[i].data !== null) {
                    dtLen = blockContent[i].data.length;
                    for (k = 0; k < dtLen; k++) {
                      htmlBlock += ` data-${blockContent[i].data[k].item}="${blockContent[i].data[k].value}"`;
                    }
                  }
                }
                htmlBlock += '>';
                if (blockContent[i].options !== null) {
                  opLen = blockContent[i].options.length;
                  for (j = 0; j < opLen; j++) {
                    htmlBlock += '<option';
                    htmlBlock += ` ${blockContent[i].options[j].item}="${blockContent[i].options[j].value}"`;
                    if (blockContent[i].options[j].default !== undefined) {
                      htmlBlock += ` ${blockContent[i].options[j].default}`;
                    }
                    htmlBlock += `>${blockContent[i].options[j].label}`;
                    htmlBlock += '</option>';
                  }
                }
                htmlBlock += '</select>';
              }
              if (blockContent[i].append !== '') {
                htmlBlock += blockContent[i].append;
              }
              if (blockContent[i].wrap === true) {
                htmlBlock += '</div>';
              }
              htmlBlock += '</div>';
            }
            if (i % 2 === 1) {
              htmlBlock += '</div>';
              if (blockContent[i].wrap_group === true) {
                htmlBlock += '</div>';
              }
            }
          } else {
            htmlBlock += blockContent[i].inject_code;
          }
        }
        htmlBlock += '</fieldset>';
        htmlBlock += '</form></div>';
      }
    })
  },
  /**
   * switches the page builder mode from
   * Hero builder mode to Hello Bar
   * builder mode
   * @param {String} va Can be 'hello' or 'hero'. If null or undefined, defaults to 'hero'
   * @constructor
   */
  switchModes: (va) => {
    if (va === 'hello') {
      $('*[data-role="hero"]').css('display', 'none');
      $('*[data-role="hello"]').css('display', 'block');
      global.pfExport = 'hello';
      $('.submit_json').attr('data-nmode', 'hello');
      new Alert('Switched to Hello Banner Creation mode', 'good');
    } else {
      $('*[data-role="hello"]').css('display', 'none');
      $('*[data-role="hero"]').attr('style', '');
      global.pfExport = 'hero';
      $('.submit_json').attr('data-nmode', 'hero');
      new Alert('Switched to Hero Banner Creation mode', 'good');
    }
  },
  /**
   * reads and/or sets the html theme data attribute
   * from the local storage item
   * @constructor
   */
  initializeTheme: () => {
    if (window.localStorage) {
      let tm = localStorage.getItem(app.storage.t);
      if (tm === null || tm === undefined) {
        $('html').attr(app.handlers.t, 'light');
      } else {
        $('html').attr(app.handlers.t, tm);
      }
    } else {
      $('html').attr(app.handlers.t, 'light');
    }
  },
  /**
   * Initialize the help view by loading items
   * from the help.json file
   * @constructor
   */
  initHelp() {
    $.ajax({
      type: app.methods.g,
      url: '../data/help.json',
      success: (data) => {
        let push = '';
        for (let h = 0; h < data.items.length; h++) {
          if (h > 0) {
            push = 'push_block';
          } else {
            push = '';
          }
          $('.help-items').append(`<li><a class="helpItem" data-target="${h}">${data.items[h].title}</a></li>`);
          $('.help_panel_holder').append(`<div class="help_item" id="hlp${h}" data-helper="${h}"><h4 class="${push}">${data.items[h].title}</h4>${data.items[h].block}</div>`);
        }
      },
      error: () => {
        new Alert('Unable to load Help Contents from JSON source', 'error');
      }
    });
  },
  /**
   * sets head section items that display in a button model
   * the locally saved hero items for rapid translation of
   * the JSON data
   * @constructor
   */
  setHeadSec() {
    try {
      let isReady = localStorage.getItem(app.storage.n);
      if (isReady !== null) {
        $(app.objects.l).css('display', 'inline-block');
        $('#import_json').css('display', 'block');
        $('.lsLoad').find('li').remove();
        let a = localStorage.getItem(app.storage.n).split(',');
        let long = a.length;
        if (long > 1) {
          for (let i = 0; i < long; i++) {
            if (a[i] !== '') {
              $('.lsLoad').append(`<li><a href="#" class="loadItem" ${app.handlers.i}="${a[i]}">${a[i]}</a></li>`);
            }
          }
        } else {
          $(app.objects.l).hide();
        }
      } else {
        $(app.objects.l).css('display', 'none');
        $('#import_json').css('display', 'none');
      }
    } catch (e) {
      console.log(e);
    }
  },
  loadAPIparams() {
    const parent = $('.com_API_local');
    const elem = $('.com_API_prog');
    const subElem = $('.com_API_state');
    let width = 10;
    const id = setInterval(frame, 20);
    const loadText = 'Loading Shopify API components';
    const doneText = 'Shopify API successfully loaded';
    $(parent).css('display', 'block');
    $(elem).attr('style', '');
    $(subElem).html(loadText);
    function frame() {
      if (width >= 100) {
        $(elem).css('background-color', '#5cb85c');
        $(subElem).html(doneText);
        clearInterval(id);
        setTimeout("$('.com_API_local').remove()", 1000);
      } else {
        width++;
        $(elem).css('width', `${width}%`);
      }
    }
  },
  getVersion(init) {
    try {
      $.ajax({
        type: app.methods.g,
        url: app.version,
        success: (data) => {
          let ver = data.project.version;
          let sup = data.project.history.length - 1;
          let lup = data.project.history[sup].date;
          if (init === true) {
            document.title = `Page Builder ${ver}`;
            $('.version_number').attr('title', `You are using version ${ver}, last updated ${lup}`).html(ver);
            $('html').attr('data-version', ver);
            Init.tagNew(ver);
          } else if (init === false) {
            let cur = $('html').attr('data-version');
            if (cur < ver || cur > ver) {
              Init.initVersionUpdate();
            }
          }
        }
      })
    } catch (e) {
      console.log(e);
    }
  },
  tagNew(ver) {
    let cssBlock = `<style>.main_nav a[data-version="${ver}"]:after,.bigboy a[data-version="${ver}"]:after {content: "new";float: right;background-color: #f0ad4e;padding: 2px 5px;font-size: 10px;color: #fff;font-weight: bold;}</style>`;
    $(app.dom.b).append(cssBlock).find(`a[data-version="${ver}"]`).attr('title', 'This feature is new to the current version');
  },
  initVersionUpdate() {
    $('.init-update').remove();
    let pageData = '<div class="init-update"><div class="blackify_overlay"><div class="prompt-update"><div class="prompt-icon"><span class="glyphicon glyphicon-cloud-download" aria-hidden="true"></span></div><div class="prompt-message">A newer version of the PageBuilder app has been detected. Do you want to load the newer version now? <br><br>Make sure you save all your work before answering YES.</div><div class="prompt-choice"><button type="button" class="btn btn-update true" data-toggle="dropdown" aria-expanded="false">YES</button><button type="button" class="btn btn-update false" data-toggle="dropdown" aria-expanded="false">NO</button></div></div></div></div>';
    $(app.dom.b).append(pageData).on('click', '.btn-update.true', () => {
      location.reload();
    }).on('click', '.btn-update.false', () => {
      $('.btn-update.false').parent().parent().parent().parent().remove();
      new Alert('Version update stopped. The update prompt will reappear at the next update interval.', 'good');
    })
  }
};