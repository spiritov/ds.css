import { copyFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function copyContents(source, destination) {
  mkdirSync(destination, { recursive: true });

  for (const name of readdirSync(source)) {
    const sourcePath = join(source, name);
    const destinationPath = join(destination, name);

    if (statSync(sourcePath).isDirectory()) {
      copyContents(sourcePath, destinationPath);
    } else {
      copyFileSync(sourcePath, destinationPath);
    }
  }
}

copyContents('src/assets', 'dist/assets');
copyContents('src/widgets', 'dist/widgets');

for (const name of ['ds.css', 'ds-scoped.css']) {
  copyFileSync(join('src', name), join('dist', name));
}
