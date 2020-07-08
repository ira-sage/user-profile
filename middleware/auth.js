export default function ({ $storage, route, redirect }) {
  const _token = $storage.getUniversal('_token')
  if (!_token && route.path !== '/') { return redirect('/') }
  if (_token && route.path === '/') { return redirect('/profile') }
}
