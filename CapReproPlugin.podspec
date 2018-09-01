
  Pod::Spec.new do |s|
    s.name = 'CapReproPlugin'
    s.version = '0.0.1'
    s.summary = 'Repro plugin'
    s.license = '-'
    s.homepage = '-'
    s.author = '-'
    s.source = { :git => '-', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '10.0'
    s.dependency 'Capacitor'
  end