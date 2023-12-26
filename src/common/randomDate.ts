export default function randomDate() {
  return new Date(new Date() - Math.random() * 1e12);
}
