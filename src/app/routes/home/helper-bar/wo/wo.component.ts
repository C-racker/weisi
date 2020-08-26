import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'helper-bar-wo',
  templateUrl: './wo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperBarWoComponent {
  loading = false;
  i: { title: string; type: string; content: string; attachments: any[] } = {
    title: '',
    type: '帐号与费用',
    content: '',
    attachments: [],
  };
  modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'], // toggled buttons
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        ['clean'], // remove formatting button
        ['link'], // link and image, video
      ],
    },
  };
  q = '';

  constructor(private msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  removeAttachment(idx: number) {
    this.msg.info(`Removed ${this.i.attachments[idx].name}`);
    this.i.attachments.splice(idx, 1);
    this.cdr.detectChanges();
  }

  changeAttachment(e: UploadChangeParam) {
    if (e.type === 'success') {
      this.i.attachments.push(e.file.response);
      this.cdr.detectChanges();
    }
  }

  submit(): void {
    this.msg.success(`提交成功`);
  }

  search(): void {
    if (this.q.length === 0) {
      return;
    }
    this.msg.info(`go to /qa/s/${this.q}`);
  }
}
