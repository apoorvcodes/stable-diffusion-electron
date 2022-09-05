import { exec } from 'child_process';
import fs from 'fs';

const setupStableDiffusion = () => {
    // If the `stable-diffusion` dir doesnt exist, clone it
    if (!fs.existsSync('stable-diffusion')) {
        exec(
            'git clone -b apple-silicon-mps-support https://github.com/bfirsh/stable-diffusion.git',
        );

        exec('cd stable-diffusion');
        exec('mkdir -p models/ldm/stable-diffusion-v1/');

        exec('pip install -r requirements.txt');

        // Ensure curl is installed!
        exec('curl "https://www.googleapis.com/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?alt=media" > models/ldm/stable-diffusion-v1/sd-v1-4.ckpt')

        exec('cd ..');
    }
}

const generateImages = (prompt: string) => {
    exec(`python scripts/txt2img.py --prompt "${prompt}" --plms --ckpt sd-v1-4.ckpt --skip_grid --n_samples 4`);
}

const cleanImages = () => {
    // Remove all files from `outputs/txt2img-samples`
    exec('rm -rf outputs/txt2img-samples');
}
