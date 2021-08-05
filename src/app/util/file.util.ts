export class FileUtil {
    private static readonly APP_EXCEL = 'application/vnd.ms-excel';
    private static readonly TEXT_CSV = 'text/csv';

    static downloadFile(data: any) {
        const blob = new Blob([data], { type: FileUtil.TEXT_CSV });
        const url = window.URL.createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'words.csv';

        anchor.click();
    }
}
