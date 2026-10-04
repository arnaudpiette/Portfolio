import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const sequenceRoot = join(process.cwd(), 'public/images/hero/sequence');
const jobs = [
  { source: 'hero-sequence-37', destination: 'hero-sequence-1920', width: 1920, quality: 78 },
  { source: 'hero_sequence_ready/click', destination: 'hero-sequence-mobile', width: 960, quality: 76 },
];

for (const job of jobs) {
  const source = join(sequenceRoot, job.source);
  const destination = join(sequenceRoot, job.destination);
  await mkdir(destination, { recursive: true });
  const files = (await readdir(source)).filter((file) => /^hero-\d{2}\.webp$/.test(file)).sort();

  await Promise.all(files.map((file) => sharp(join(source, file))
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(join(destination, file))));

  console.log(`${job.destination}: ${files.length} WebP generated at <= ${job.width}px`);
}
